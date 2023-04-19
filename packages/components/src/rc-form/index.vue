<template>
	<div class="rc_form_box">
		<!-- :rules="formRules" 改变校验的注入到item级别 方便控制是否执行校验规则-->
		<el-form
			ref="formRef"
			:model="form"
			:label-width="labelWidth || '100px'"
			@submit.prevent
		>
			<div
				:class="`contant_item ${
					isSearchForm && show ? 'contant_item_show' : ''
				}  ${
					!isSearchForm ? 'contant_item_no_padding' : 'contant_item_search_form'
				}`"
			>
				<el-row>
					<!-- type ==== 'br' 只能用在form表单上不能用在searchForm -->
					<el-col
						v-for="(item,index) in formList"
						v-show="showList(item)"
						:span="item.type === 'br' ? 24 : item.span || 24 / rowNumber"
						:offset="item.offset || 0"
						:key="index"
						:style="item.type === 'br' ? 'min-height: 0px' : ''"
					>
						<div v-if="item.type === 'br'" style="display: contents" class="detail-title-container">
							<slot :name="item.slotName"></slot>
							<div v-if="titleType === 'detail' && item.contant" :class="`detail-title-content ${item.class} ${firstDetailTitleIndex === index ? 'no-gap' : ''}`">
								<div class="gap"></div>
								<div class="detail-title">{{ item.contant }}</div>
							</div>
							<div class="slot-content" v-else-if="item.contant">
								{{ item.contant }}
							</div>
						</div>
						<div
							v-else
							:class="` ${
								isSearchForm ? 'my_item_box' : 'my_item_box_no_search'
							} ${Object.keys(formRules)?.length > 0 ?  'rules_item_box' : ''}`"
							:style="
								formItemMrgb || formItemMrgb === 0
									? `margin-bottom: ${formItemMrgb}px`
									: ''
							"
						>
							<!-- 组件注入 -->
							<!-- key 是为了ruleDisabled 改变的时候重新加载 formItem  -->
							<!-- 避免el把校验规则缓存起来，导致通过ruleDisabled控制是否执行校验规则的逻辑失效 -->
							<el-form-item
								:label="item.label"
								class="my_form_item"
								:prop="item.key"
								:key="item.ruleDisabled"
								:rules="
									!item.isShow ||
									item.ruleDisabled ||
									['text', 'textDate', 'textList', 'textCascader', 'textJoin', 'textWith'].includes(
										item.type
									)
										? null
										: formRules[item.key]
								"
							>
								<!-- 多单号查询 -->
								<SearchNumberList
									v-if="item.type === 'modalTextarea'"
									v-model="form[item.key]"
									@clear="delete form[item.key]"
									v-bind="{
                    ...item,
										modelProps: item,
                    disabled: item.disabled || (item.disabledFun && item.disabledFun(form))
									}"
									v-model:ruleModel="form[item.ruleOutKey]"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
									:keyUpEnter="keyUpEnter"
								/>
								<!-- 下拉单选 & 下拉多选 -->
								<el-select
									popper-class="pagination-popper"
									v-else-if="['select', 'selectWith'].includes(item.type)"
									v-model="form[item.key]"
									:multiple="item.multiple"
									:collapse-tags="true"
									:max-collapse-tags="item.multiple ? item.tags || 1 : item.tags"
									:collapse-tags-tooltip="
										item.tags || item.multiple ? true : false
									"
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									filterable
									:clearable="!item.noClearable"
									:placeholder="item.placeholder || '请选择'"
									@clear="item.selectClear ? item.selectClear() : delete form[item.key]"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
									@keyup.enter="keyUpEnter"
								>
									<el-option
										v-for="item2 in item.options || staticData[item.selectKey] || staticData[item.key] ||  []"
										:key="item2.value"
										:label="
											item.type === 'selectWith'
												? `【${item2.value}${(isEmpty(item2.value)||isEmpty(item2.label || item2.name))?'':'-'}${item2.label || item2.name}】`
												: item2.label || item2.name
										"
										:value="item2.value"
									>
									</el-option>
								</el-select>
								<!-- 区间输入 -->
								<DigitalRange
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									v-else-if="item.type === 'digitalRange'"
									v-model="form[item.key]"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
									:keyUpEnter="keyUpEnter"
								></DigitalRange>
								<!-- 日期区间选择 -->
								<DatePicker
									v-else-if="item.type === 'dateSelect'"
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									v-model="form[item.key]"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
								/>
								<!-- 基础数据弹窗 -->
								<BasicSelectModal
									:placeholder="item.placeholder"
									v-else-if="item.type === 'search'"
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									v-model="form[item.key]"
									v-model:ruleModel="form[item.ruleOutKey]"
									:initItem="item"
									@onDialogShow="onDialogShow"
									@onSearchClear="onSearchClear"
								/>
								<SearchSelect
									v-else-if="item.type === 'searchSelect'"
									v-bind="{ ...item, initItem: item }"
									v-model="form[item.key]"
									@onDialogShow="onDialogShow"
									@onSearchClear="onSearchClear"
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									:checkTable="form?.['checkTable']?.[item.key]"
									v-model:ruleModel="form[item.ruleOutKey]"
									@custDialog="custDialog"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
								/>
								<!-- 兼容单独的时间选择器 -->
								<div
									v-else-if="
										['date', 'daterange', 'datetime', 'datetimerange'].includes(
											item.type
										)
									"
									class="my_date_picker"
								>
									<el-date-picker
										popper-class="pagination-popper"
										:disabled="
											item.disabled || (item.disabledFun && item.disabledFun(form))
										"
										:disabled-date="item.disabledDate"
										v-model="form[item.key]"
										:type="item.type"
										:placeholder="item.placeholder || '请选择'"
										@change="
											(val) => {
												if (onChangeFlag) return;
												if (item.changeCallBack) {
													item.changeCallBack(val, form);
												}
											}
										"
									>
									</el-date-picker>
								</div>
								<div class="my_date_picker" v-else-if="item.type === 'year'">
									<el-date-picker
										popper-class="pagination-popper"
										:clearable="item.clearable"
										v-model="form[item.key]"
										type="year"
										:disabled="
											item.disabled || (item.disabledFun && item.disabledFun(form))
										"
										:disabled-date="item.disabledDate"
										:placeholder="item.placeholder || '请选择'"
										@change="
											(val) => {
												if (onChangeFlag) return;
												if (item.changeCallBack) {
													item.changeCallBack(val, form);
												}
											}
										"
										@keyup.enter="keyUpEnter"
									>
									</el-date-picker>
								</div>
								<el-cascader
									style="width: 100%"
									v-else-if="item.type === 'cascader'"
									:props="item.cascaderProps"
									v-model="form[item.key]"
									clearable
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									:placeholder="item.placeholder || '请选择'"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
									@keyup.enter="keyUpEnter"
								></el-cascader>
								<el-radio-group
									v-else-if="item.type === 'radio'"
									v-model="form[item.key]"
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
								>
									<el-radio
										v-for="item2 in item.options || staticData[item.key] || []"
										:key="item2.value"
										:label="item2.value"
										>{{ item2.label || item2.name }}</el-radio
									>
								</el-radio-group>
								<div
									class="my_input_number"
									v-else-if="item.type === 'inputNumber'"
								>
									<el-input-number
										:precision="item.precision || 0"
										v-model="form[item.key]"
										:min="item.min ?? -Infinity"
										:max="item.max"
										:controls="false"
										:disabled="
											item.disabled || (item.disabledFun && item.disabledFun(form))
										"
										:placeholder="item.placeholder || '请输入'"
										@change="
											(val) => {
												if (onChangeFlag) return;
												if (item.changeCallBack) {
													item.changeCallBack(val, form);
												}
											}
										"
										@keyup.enter="keyUpEnter"
									/>
								</div>
								<el-input
									v-else-if="['remark', 'textarea'].includes(item.type)"
									:maxlength="item.maxLen || 255"
									v-model="form[item.key]"
									type="textarea"
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									:placeholder="item.placeholder || '请输入'"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
									@keyup.enter="keyUpEnter"
								/>
								<el-tooltip
									v-else-if="
										['text', 'textDate', 'textList', 'textCascader', 'textJoin', 'textWith'].includes(
											item.type
										)
									"
									effect="dark"
									:content="item.isShow && getText(form[item.selectKey || item.key], item)"
									placement="top"
								>
									<div class="text-ellipsis" >
										{{ item.isShow && getText(form[item.selectKey || item.key], item) }}
									</div>
								</el-tooltip>
								<el-input
									v-else
									v-model.trim="form[item.key]"
									clearable
									:disabled="
										item.disabled || (item.disabledFun && item.disabledFun(form))
									"
									:placeholder="item.placeholder || '请输入'"
									:maxlength="item.maxLen"
									@change="
										(val) => {
											if (onChangeFlag) return;
											if (item.changeCallBack) {
												item.changeCallBack(val, form);
											}
										}
									"
									@keyup.enter="keyUpEnter"
								/>
								<!-- this line up component is finish -->
							</el-form-item>
						</div>
					</el-col>
					<el-col
						v-show="(isSearchForm && !show)"
						:span="24 / rowNumber"
					>
						<div class="my_item_box">
							<!-- 查询表单用的查询按钮，如果index属于2并且组件模式isSearchForm为true -->
							<slot name="searchButton"></slot>
						</div>
					</el-col>
				</el-row>
			</div>
		</el-form>
	</div>
</template>

<script lang="ts">
import {
	toRefs,
	reactive,
	defineComponent,
	defineAsyncComponent,
	computed,
	ref,
	watch,
	inject,
	PropType,
	watchEffect,
  nextTick,
} from 'vue';
import { useCurrentInstance, getNotEmptyObject, isEmpty, deepClone } from '../utils/utils';
// import { queryPageAdministrationArea } from '@/index/api';

interface StateType {
	form: any;
	formRef: any;
	onChangeFlag: boolean;
}
export default defineComponent({
	name: 'RCForm',
	emits: ['onDialogShow', 'onSearchClear', 'custDialog', 'inputEnter', 'update:modelValue'],
	props: {
		modelValue: {
			type: Object as () => any,
			default: () => ({}),
		},
		// 表单枚举
		formList: {
			type: Array as () => Array<any>,
			default: () => [],
		},
		// 每行数量
		rowNumber: {
			type: Number,
			default: 3,
		},
		// 是否查询表单
		isSearchForm: {
			type: Boolean,
			default: false,
		},
		// 查询表单状态（ 收起 | 展开 ）
		show: {
			type: Boolean,
			default: true,
		},
		// 静态枚举方式
		staticData: {
			type: Object as () => any,
			default: () => {},
		},
		// labelWidth
		labelWidth: {
			type: String,
			default: '100px',
		},
		// 校验规则
		formRules: {
			type: Object as () => any,
			default: () => ({}),
		},
		initForm: {
			type: Object as () => any,
			default: () => ({}),
		},
		// 自定义每个表单项下边距
		formItemMrgb: {
			type: Number,
			default: null,
		},
		// 单据属性模板url
		extendAttrUrl: {
			type: String,
			default: '',
		},
		fetchUrl: {
      type: Function as PropType<(data: any) => Promise<any>>,
    },
    params: {
      type: Object as () =>any,
      default: ()=>{},
    },
    renderFunc: {
      type: Function,
      default: ((res:any)=>res)
    },
		callbackFunc: {
      type: Function||null,
      default: null
    },
		// 标题类型
		titleType: {
			type: String,
			default: '',
		}
	},
	setup(props, { emit }) {
		console.log('props', props);

		const { globalProperties } = useCurrentInstance();
		let state = reactive<StateType>({
			form: {},
			formRef: ref(null),
			onChangeFlag: false,
		});

		const getText = (target: any, item: any) => {
			let newTarget = target;

			if (item.textFormat) {
				return item.textFormat(target, state.form);
			}

			if (item?.options || props?.staticData?.[item.key]) {
				newTarget = getEnum(target, item.options || props.staticData[item.key], item.type === 'textWith');
			}

			if (item.type === 'textDate') {
				const testDate = formatDate(target, item.format);
				if (testDate !== 'Invalid Date') {
					newTarget = testDate;
				}
			}

			if (['textList', 'textCascader', 'textJoin'].includes(item.type)) {
				let joinStr = ',';
				let joinTarget = '';
				switch (item.type) {
					case 'textList':
						joinStr = ',';
						joinTarget = 'name';
						break;
					case 'textCascader':
						joinStr = ' / ';
						joinTarget = '';
						break;
					default:
						joinStr = item?.joinStr || ',';
						joinTarget = item?.joinTarget || '';
						break;
				}
				if (target && Array.isArray(target) && target.length > 0) {
					newTarget = target
						?.map((item: any) => (joinTarget ? item?.[joinTarget] : item))
						.join(joinStr);
				} else {
					newTarget = '';
				}
			}

			return newTarget;
		};

		const getEnum = (target: any, enumList: any, hasValue = false) => {
			let targetEnum;
			if (enumList && Array.isArray(enumList)) {
				targetEnum = enumList.find((item) => {
					return item.value === target;
				});
			}
			return targetEnum && (!hasValue ? (targetEnum?.name || targetEnum?.label) : `【${targetEnum?.value}-${targetEnum?.name}】`) || target;
		};

		// 时间处理
		const formatDate = (date: any, format?: any) => {
			try {
				return globalProperties.dayjs(date).format(format || 'YYYY-MM-DD');
			} catch (error) {
				return date;
			}
		};

		const mustShowFilterList: any = computed(() => {
			return props.formList
				.filter((item: any) => item.isShow)
				.slice(0, props.rowNumber - 1);
		});

		// 计算收起和展示渲染的数据
		const showList = (target: any) => {
			if (props.show) {
				return target.isShow;
			} else {
				return (
					mustShowFilterList.value.findIndex(
						(item: any) => item.key === target.key
					) > -1
				);
			}
		};

		const onDialogShow = (key: string, row = {}) => {
			emit('onDialogShow', key, row);
		};
		const custDialog = (data: any, key: string) => {
			emit('custDialog', data, key);
		};

		const onSearchClear = (
			arg: any,
			key: string,
			callback: any
		) => {
			if (arg) {
				const formData = deepClone(state.form);
				Object.keys(arg).map((item) => {
					formData[item] = arg[item];
					formData?.checkTable?.hasOwnProperty(item) &&
						(formData.checkTable[item] = []);
					formData?.checkTableList?.hasOwnProperty(item) &&
						(formData.checkTableList[item] = []);
				});
				formData[key] = null;
				formData?.checkTable?.hasOwnProperty(key) &&
					(formData.checkTable[key] = []);
				formData?.checkTableList?.hasOwnProperty(key) &&
					(formData.checkTableList[key] = []);
				state.form = formData;
			}
			if (callback) {
				callback();
			}
			emit('onSearchClear', { key });
		};

		// 除去下拉多选可能出现的空数组默认值
		const submitFormControl = (val: any) => {
			const deepCloneVal = JSON.parse(JSON.stringify(val));
			Object.keys(val).forEach((item) => {
				if (Array.isArray(val[item]) && val[item].length === 0) {
					delete deepCloneVal[item];
				}
			});
			return deepCloneVal;
		};

		const submit = () => {
			return new Promise<void>((resolve, reject) => {
				try {
					state.formRef.validate((valid: any, error: any) => {
						if (valid) {
							resolve(submitFormControl(getNotEmptyObject(state.form)));
						} else {
							console.log('form', error);
							reject(error);
						}
					});
				} catch (error) {
					console.log('catch', error);
					reject(error);
				}
			});
		};
		state.form = computed({ // 重新定义
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    })
		const getData = async (): Promise<void> => {
      try {
        if (props.fetchUrl) {
					const res = await props.fetchUrl(props.params);
					state.form = props.renderFunc(res || {});
					props.callbackFunc && props.callbackFunc(res || {});
				}
      } catch(error) {
        console.log(error,'error')
      }
    };
		props.fetchUrl && getData();

		watchEffect(() => {
			if (!props.fetchUrl && props.initForm && Object.keys(props.initForm)?.length > 0) {
				state.form = { ...props.initForm };
			}
		});


		// watch(
		// 	() => state.form,
		// 	(val) => {
		// 		if (Object.keys(val)?.length > 0) {
		// 			emit('update:modelValue', val)
		// 		}
		// 	},
		// 	{ deep: true, immediate: true }
		// );

		const promiseChangeData = (data: any) => {
			return new Promise((res, rej) => {
				state.form = { ...data };
				nextTick(() => {
					res('finish');
				});
			});
		};

		const flagChangeForm = (data: any, clearRule = false) => {
			state.onChangeFlag = true;
			promiseChangeData(data).finally(() => {
				state.onChangeFlag = false;
				if (clearRule) {
					nextTick(() => {
						state.formRef.clearValidate();
					});
				}
			});
		};

		const firstDetailTitleIndex: any = computed(() => {
			return props.formList.findIndex(item => (item.contant) )
		})

		const keyUpEnter = () => {
			emit('inputEnter');
		};
		return {
			...toRefs(state),
			showList,
			onDialogShow,
			onSearchClear,
			submit,
			getText,
			flagChangeForm,
			keyUpEnter,
			custDialog,
			isEmpty,
			firstDetailTitleIndex,
			getData,
		};
	},
	components: {
		SearchNumberList: defineAsyncComponent(
			() => import('../search-number-list/index.vue')
		),
		DigitalRange: defineAsyncComponent(
			() => import('../digital-range/index.vue')
		),
		DatePicker: defineAsyncComponent(
			() => import('../date-picker/index.vue')
		),
		BasicSelectModal: defineAsyncComponent(
			() => import('../basic-select-modal/index.vue')
		),
		SearchSelect: defineAsyncComponent(
			() => import('../search-select/index.vue')
		),
	},
});
</script>

<style scoped lang="less">
/* 实际使用的样式 */
.contant_item {
	width: 100%;
	box-sizing: border-box;
}
.contant_item_search_form {
	padding: 16px 16px 7px 16px;
}
.contant_item_no_padding {
	padding: 0;
	margin: 0;
}
.my_item_box {
	width: 100%;
	margin-bottom: 12px;
}
.rules_item_box {
	margin-bottom: 18px;
}
.my_item_box_no_search {
	width: 100%;
	margin-bottom: 20px;
}
// todo
.my_form_item_last_row {
	margin-bottom: 0px;
}
.my_item_box_no_padding {
	margin-bottom: 0px;
}
.button_input {
	width: 100%;
	display: flex;
}
.rc_form_box {
	min-width: 800px;
}
// 修改el原生样式
.my_item_box .el-form-item {
	width: 100%;
}
//  下拉选择控件
.my_form_item .el-select {
	width: 100%;
}
.my_form_item .el-input {
	width: 100%;
}
.my_date_picker {
	width: 100%;
	:deep(.el-tooltip__trigger) {
		width: 100%;
	}
	:deep(.el-input__wrapper) {
		width: 100%;
		box-sizing: border-box;
	}
}
.my_input_number {
	width: 100%;
	:deep(.el-input-number) {
		width: 100%;
	}
	// inputNumber靠左而非居中
	:deep(.el-input__inner){
		text-align: left;
	}
}
:deep(.el-select__tags) {
	width: 101% !important;
	max-width: 101% !important;
	z-index: 1;
}
:deep(.el-form-item--default) {
	margin-bottom: 6px;
}
:deep(.el-form-item--default .el-form-item__label) {
	color: #999 !important;
}
.detail-title-container {
	.detail-title-content {
		padding-top: 16px;
		position: relative;
		.gap {
			height: 16px;
			background-color: #f7f7f7;
			position: absolute;
			left: -16px;
			right: -16px;
			top: 0;
			z-index: 1;
		}
		.detail-title {
			font-size: 16px;
			line-height: 16px;
			font-weight: 600;
			color: #333333;
			padding-left: 8px;
			border-left: 2px solid #333;
			margin: 15px 0;
			// position: relative;
		}
	}
	.no-gap {
		padding-top: 0;
		.gap {
			display: none;
		}
	}
}
.text-ellipsis {
	overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
</style>
<style lang="less">
.pagination-popper {
	z-index: 999999 !important;
}
</style>
