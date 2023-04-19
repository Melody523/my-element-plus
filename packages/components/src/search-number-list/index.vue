<template>
	<InputAndButton
		v-bind="{
			isUse: !!modelProps.ruleOutKey,
			disabled: disabled,
			initValue: ruleValue,
		}"
		@click="onClickShowModel('ruleValue')"
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
              @click="onClickShowModel('theValue')"
            ></svg-icon>
					</template>
				</el-input>
				<!-- dialog多单号弹窗 -->
				<el-dialog
					v-model="modelVisible"
					append-to-body
					:title="(modelTarget === 'ruleValue' && modelProps.ruleTitle) || `多单号查询${modelTarget === 'ruleValue' ? ' - 排除项' : '' }`"
					width="800px"
					:top="dialogTop"
					:before-close="beforeClose"
					custom-class="number-list-dialog"
				>
					<div className="dialog_title_box">
						<div className="title_tips">
							如需同时使用多个值进行查询，请使用逗号,空格或换行分隔{{
								modelProps?.maxLength > 0
									? ` --- 最多可以输入${modelProps.maxLength}行`
									: ''
							}}
						</div>
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
					<div class="modal_contant">
						<el-input
							placeholder="请输入"
							type="textarea"
							v-model="inputValue"
							:rows="10"
						>
						</el-input>
						<div class="count_box">
							行数: {{ countsNumber }}
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
	defineAsyncComponent,
	computed,
} from 'vue';
interface stateModel {
	theValue: any; // 目标值（输入值）
	inputValue: string; // 弹窗值
	modelVisible: boolean; // 弹窗展示
	dialogTop: string; // 弹窗上边界距
	ruleValue: any; // 排除值
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
			state.inputValue = formatting(state[model]);
			state.modelTarget = model;
		};

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
				return;
			}
			state[state.modelTarget] = formatData.join(',');
			beforeClose();
		};

		// 点击清空
		const isClearInput = () => {
			state.theValue = '';
			emit('clear', '');
		};

		// 输入改变
		const inputChange = (val: string) => {
			state.inputValue = formatting(val);
			onModelSubmit();
		};

		state.theValue = computed({
			get: () => props.modelValue,
			set: (value) => emit("update:modelValue", value),
		})
		state.ruleValue = computed({
			get: () => props.ruleModel,
			set: (value) => emit("update:ruleModel", value),
		})

		state.countsNumber = computed(() => {
			if (state.inputValue && state.inputValue?.split('\n')?.length) {
				return state.inputValue?.split('\n')?.length;
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
.title_tips {
	color: #9e9e9e;
}
.dialog_title_box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 11px;
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
	line-height: 20px;
	font-size: 14px;
	color: #999999;
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
<style lang="less">
.number-list-dialog {
	.el-dialog__body {
		padding: 10px 20px;
	}
}
</style>
