<template>
	<div class="contant_box" :style="`max-height:${maxHeight}px`">
		<RCForm
			ref="RCFormRef"
			v-bind="{
				...$attrs,
				formList,
				rowNumber,
				staticData,
				labelWidth,
				hasToolsCol: true,
				show: !hasShow ? false : show,
			}"
			v-model="form"
			@onDialogShow="onDialogShow"
			@custDialog="custDialog"
			@inputEnter="onSearchSubmit"
		>
			<template v-slot:searchButton>
				<ToolsList
					v-bind="{
						show,
						disabled: toolsListDisabled,
						hasShow
					}"
					@onReset="onReset"
					@onSearchSubmit="onSearchSubmit"
					@changeShow="changeShow"
				/>
			</template>
		</RCForm>
		<div v-show="hasShow && show" class="under_stick_control">
			<ToolsList
				v-bind="{
					show,
					disabled: toolsListDisabled,
					hasShow
				}"
				@onReset="onReset"
				@onSearchSubmit="onSearchSubmit"
				@changeShow="changeShow"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import {
	toRefs,
	reactive,
	defineComponent,
	defineAsyncComponent,
	ref,
	onMounted,
	computed,
	inject,
	watch,
} from 'vue';
import RCForm from '../rc-form/index.vue';
import { deepClone } from '../utils/utils';
export default defineComponent({
	name: 'SearchForm',
	emits: [
		'onSearchSubmit',
		'onDialogShow',
		'custDialog',
		'onReset',
		'update:modelValue',
	],
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
		// 静态枚举:
		staticData: {
			type: Object as () => any,
			default: () => ({}),
		},
		labelWidth: {
			type: String,
			default: '100px',
		},
		// 初始参数
		initValue: {
			type: Object as () => any,
			default: () => ({}),
		},
		// 默认参数
		defaultValue: {
			type: Object as () => any,
			default: () => ({}),
		},
		rowNumber: {
			type: Number,
			default: 3,
		},
		// 操作按钮是否禁用
		toolsListDisabled: {
			type: Boolean,
			default: false,
		},
		// 是否展开所有表单项
		show: {
			type: Boolean,
			default: true,
		},
		// 点击搜索后是否自动收起表单项
		keepShow: {
			type: Boolean,
			default: true,
		},
		maxHeight: {
			type: [String, Number],
			default: '400',
		},
	},

	setup(props, { emit }) {
		let state = reactive<any>({
			form: {},
			show: props.show,
			RCFormRef: ref(null),
		});

		// 点击查询
		const onSearchSubmit = () => {
			state.RCFormRef.submit()
				.then((res: any) => {
					!props.keepShow && (state.show = false);
					emit('onSearchSubmit', res);
				})
				.catch((error: any) => {
					console.log(error);
				});
		};
		state.form = computed({ // 重新定义
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    })
		
		// 点击重置
		const onReset = () => {
			// 如果存在祖宗组件留下的方法则执行,否则直接给子组件赋值
			state.form = deepClone(props.defaultValue)
			emit('onReset');
		};

		const changeShow = (target?: boolean) => {
			state.show = !state.show;
		};

		onMounted(async () => {
			const newObj = {
				...state.form,
				...props.initValue,
				...props.defaultValue,
			};
			// 如果存在祖宗组件留下的方法则执行,否则直接给子组件赋值
			state.form = newObj
		});

		const onDialogShow = (key: any, row = {}) => {
			emit('onDialogShow', key, row);
		};
		const custDialog = (list: any, key: string) => {
			emit('custDialog', list, key);
		};

		const hasShow = computed(() => props.formList.filter((item) => item.isShow).length >= props.rowNumber);

		return {
			...toRefs(props),
			...toRefs(state),
			onSearchSubmit,
			onReset,
			onDialogShow,
			custDialog,
			changeShow,
			hasShow,
		};
	},
	components: {
		RCForm: RCForm, // 同步引入
		ToolsList: defineAsyncComponent(
			() =>
				import(
					'../tools-list/index.vue'
				)
		),
	},
});
</script>

<style scoped>
/* 实际使用样式 */
.contant_box {
	width: 100%;
	/* max-height: 400px; */
	overflow-x: hidden;
	overflow-y: auto;
	background-color: #fff;
}
.under_stick_control {
	position: sticky;
	bottom: -1px;
	left: 0;
	right: 0;
	min-height: 56px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: #fff;
	z-index: 11;
	box-shadow: 0px -1px 0px 0px #eeeeee;
}

.contant_box::-webkit-scrollbar {
	width: 4px;
}
.contant_box::-webkit-scrollbar-thumb {
	border-radius: 10px;
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	background: rgba(170, 170, 170, 0.2);
}
.contant_box::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 0;
	background: rgba(204, 204, 204, 0.1);
}
</style>
