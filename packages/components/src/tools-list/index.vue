<template>
	<div class="tools_list">
		<div
			:class="`button_spacing reset_button ${disabled ? 'is_disabled' : ''}`"
			@click="
				() => {
					!disabled && onReset();
				}
			"
		>
			<div class="button_title">重置</div>
		</div>
		<div
			:class="`button_spacing search_button ${disabled ? 'is_disabled' : ''}`"
			@click="
				() => {
					!disabled && onSearchSubmit();
				}
			"
		>
			<div class="button_title">搜索</div>
		</div>
		<div :class="`button_spacing show_control_button `" v-if="changeShow">
			<div
				:class="`show_control_icon_box ${disabled ? 'is_disabled' : ''}`"
				@click="
					() => {
						!disabled && changeShow(!show);
					}
				"
			>
				<div :class="`show_control_icon ${!show ? 'transform_rotate' : ''} `">
					<svg-icon
						:class="`${disabled ? 'is_disabled' : ''}`"
						iconName="icon-jiantou"
					></svg-icon>
				</div>
			</div>
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
} from 'vue';
export default defineComponent({
	name: 'ToolsList',
	emits: ['update:modelValue', 'onChangeFormItem', 'getFormValue'],
	props: [
		'onReset',
		'onSearchSubmit',
		'changeShow',
		'show',
		'disabled',
		'getFormValue',
	],
	setup(_, { emit }) {
		let state = reactive<any>({
			ctRef: ref(null),
		});

		const onChangeFormItem = (data: any, isFirst = false) => {
			emit('onChangeFormItem', data, isFirst);
		};

		return {
			...toRefs(state),
			onChangeFormItem,
		};
	},
	components: {
		MenuButton: defineAsyncComponent(
			() => import('../menu-button/index.vue')
		),
	},
});
</script>

<style scoped lang="less">
.tools_list {
	min-width: 300px;
	display: flex;
	justify-content: flex-end;
	height: 32px;
}

.reset_button {
	width: 55px;
	height: 32px;
	background: #ffffff;
	border-radius: 2px;
	border: 1px solid #cccccc;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	.button_title {
		width: 27px;
		height: 20px;
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 20px;
		text-align: center;
	}
}

.search_button {
	width: 60px;
	height: 32px;
	background-color: #333333;
	border-radius: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		background-color: #202020;
	}
	.button_title {
		width: 24px;
		height: 20px;
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #ffffff;
		line-height: 20px;
	}
}

.button_spacing {
	margin-right: 12px;
}

.show_control_button {
	height: 32px;
	width: 16px;
	display: flex;
	align-items: center;
	margin-right: 16px;
	.show_control_icon_box {
		// margin-left: 4px;
		.show_control_icon {
			width: 16px;
			height: 16px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}
		.transform_rotate {
			transform: rotate(180deg);
		}
	}
}
.is_disabled {
	cursor: not-allowed;
}
</style>
