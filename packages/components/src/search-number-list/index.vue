<template>
	<InputAndButton
		v-bind="{
			isUse: hasRuleOut,
			disabled: disabled,
			initValue: ruleValue,
		}"
		@click="onClickShowModel('ruleOut')"
	>
		<template v-slot:com>
			<div class="widght_box">
				<el-input
					:disabled="disabled"
					v-model="theValue"
					clearable
					@clear="isClearInput"
					@change="inputChange"
					:placeholder="placeholder || '多个值请用逗号或者空格分隔'"
					@keyup.enter="keyUpEnter"
				>
					<template v-slot:suffix>
            <svg-icon
              :color="disabled ? '#a8abb2' : '#666666'"
              iconName="icon-fangda"
              :className="`button_point ${disabled ? 'button_point_disabled' : ''}`"
              @click="onClickShowModel"
            ></svg-icon>
					</template>
				</el-input>
				<!-- dialog多单号弹窗 -->
				<el-dialog
					v-model="modelVisible"
					append-to-body
					:title="
						modelTarget === 'ruleOut'
							? `${
									modelProps.ruleTitle ||
									modelProps.title ||
									modelProps.label ||
									'多单号查询'
							  } - 排除项`
							: modelProps.title || modelProps.label || '多单号查询'
					"
					width="800px"
					:top="dialogTop"
					:before-close="beforeClose"
				>
					<div className="dialog_title_box">
						<div style="color: #9e9e9e">
							如需同时使用多个值进行查询，请使用逗号,空格或换行分隔{{
								modelProps?.maxLength > 0
									? ` --- 最多可以输入${modelProps.maxLength}行`
									: ''
							}}
						</div>
						<div>
							<el-tooltip
								class="box-item"
								effect="dark"
								content="格式化：移除字符前后空格，移除空白行，将逗号或者空格分隔转变为换行展示"
								placement="top-end"
							>
								<at-button
                  type="plain"
									@click="inputValue = formatting(inputValue)"
									>数据格式化</at-button
								>
							</el-tooltip>
						</div>
					</div>
					<div class="modal_contant">
						<el-input
							placeholder="请输入"
							type="textarea"
							v-model="inputValue"
							:rows="10"
						>
						</el-input>
						<div class="count_box">
							行数:
							<span>
								{{ countsNumber }}
							</span>
						</div>
					</div>
					<template #footer>
						<span class="dialog-footer">
							<at-button type="primary" @click="onModelSubmit">确认</at-button>
							<at-button class="mrgl-10" @click="beforeClose">取消</at-button>
						</span>
					</template>
				</el-dialog>
			</div>
		</template>
	</InputAndButton>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import {
	toRefs,
	reactive,
	defineComponent,
	watch,
	defineAsyncComponent,
	computed,
} from 'vue';
interface stateModel {
	theValue: any; // 目标值（输入值）
	inputValue: string; // 弹窗值
	modelVisible: boolean; // 弹窗展示
	dialogTop: string; // 弹窗上边界距
	ruleValue: string; // 排除值
	modelTarget: string; // 点击前记录弹窗目标，关闭弹窗的时候根据弹窗目标给目标赋值
	countsNumber: any; // 合计数字（提供给外部直接定义展示的合计数字）
}
export default defineComponent({
	name: 'SearchNumberList',
	emits: ['update:modelValue', 'clear', 'update:ruleModel', 'change'],
	props: {
		// 目标值（输入值）-外部传入
		modelValue: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		// 组件配置config
		modelProps: {
			type: Object,
			default: () => ({}),
		},
		// 是否启用排除功能
		hasRuleOut: {
			type: Boolean,
			default: false,
		},
		// 排除对应的key
		ruleModel: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		// 回车触发
		keyUpEnter: {
			type: Function,
			default: () => {},
		},
	},
	setup(props, { emit }) {
		let state = reactive<stateModel>({
			theValue: '',
			ruleValue: '',
			inputValue: '',
			modelVisible: false,
			modelTarget: '',
			dialogTop: '15vh',
			countsNumber: 0,
		});

		// 多行输入 --- 弹窗内数据格式化处理
		const formatting = (str: string) => {
			return (
				(str &&
					str
						.replace(/(,|，|\s)/g, '\n')
						.split('\n')
						.map((item) => item.trim())
						.filter((item) => item)
						.join('\n')) ||
				''
			);
		};

		// 展示弹窗
		const onClickShowModel = (model?: any) => {
			if (props.disabled) {
				return;
			}
			state.modelVisible = true;
			if (model === 'ruleOut') {
				state.inputValue =
					(props.ruleModel && formatting(props.ruleModel)) ||
					formatting(state.ruleValue);
				state.modelTarget = 'ruleOut';
			} else {
				state.inputValue =
					(props.modelValue && formatting(props.modelValue)) ||
					formatting(state.theValue);
				state.modelTarget = '';
			}
		};

		watch(
			() => props.ruleModel,
			(mewVal: any) => {
				// state.inputValue = (mewVal && formatting(mewVal)) || '';
				// state.ruleValue = (mewVal && formatting(mewVal)) || '';
				state.ruleValue = mewVal;
			},
			{ deep: true, immediate: true }
		);

		// 多行输入 --- 弹窗点击确认的时候
		const onModelSubmit = () => {
			const formatData = formatting(state.inputValue).split('\n');
			if (
				props?.modelProps?.maxLength &&
				formatData.length > props.modelProps.maxLength
			) {
        ElMessage({
          message: `当前输入数据超出可输入最大行数${props.modelProps.maxLength}，请进行调整！`,
          type: 'warning',
        })
				state.theValue = props.modelValue;
				return;
			}
			if (state.modelTarget === 'ruleOut') {
				state.ruleValue = formatData.join(',');
				emit('update:ruleModel', state.ruleValue);
			} else {
				state.theValue = formatData.join(',');
				emit('update:modelValue', state.theValue);
			}
			// state.modelVisible = false;
			// state.inputValue = '';
			// state.modelTarget = '';
			beforeClose();
		};

		// 点击清空
		const isClearInput = () => {
			state.theValue = '';
			emit('update:modelValue', '');
			emit('clear', '');
		};

		// 输入改变
		const inputChange = (val: string) => {
			state.inputValue =
				(props.modelValue && formatting(val)) || formatting(state.theValue);
			onModelSubmit();
		};

		state.theValue = JSON.parse(JSON.stringify(props.modelValue));

		// 监听父子value的变化
		watch(
			() => props.modelValue,
			(newValue) => {
				state.theValue = newValue;
				emit('change', newValue);
			}
		);

		state.countsNumber = computed(() => {
			if (state.inputValue.length === 0) {
				return 0;
			} else if (state.inputValue?.split('\n')?.length) {
				return state.inputValue?.split('\n')?.length;
			} else if (state.inputValue.length > 0) {
				return 1;
			} else {
				return 0;
			}
		});

		const beforeClose = () => {
			state.modelTarget = '';
			state.modelVisible = false;
			state.inputValue = '';
		};

		return {
			...toRefs(props),
			...toRefs(state),
			onClickShowModel,
			onModelSubmit,
			formatting,
			isClearInput,
			inputChange,
			beforeClose,
		};
	},
	components: {
		InputAndButton: defineAsyncComponent(
			() => import('../input-and-button/index.vue')
		),
		AtButton: defineAsyncComponent(
			() => import('../button/button.vue')
		),
	},
});
</script>

<style scoped lang="less">
.widght_box {
	width: 100%;
}
.dialog_title_box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 11px;
}
.dialog_control_button {
}
.button_point {
	cursor: pointer;
}
.button_point_disabled {
	cursor: not-allowed;
}
:deep(.el-input__suffix-inner) {
	display: flex;
	flex-direction: row-reverse;
}
.modal_contant {
	position: relative;
}
.count_box {
	// width: 51px;
	height: 20px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	line-height: 20px;
	position: absolute;
	right: 12px;
	bottom: 9px;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.mrgl-10 {
  margin-left: 10px;
}
</style>
