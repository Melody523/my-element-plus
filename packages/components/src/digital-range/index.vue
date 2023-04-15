<template>
	<div class="widght_box">
		<el-input
			:disabled="disabled"
			v-model="value[0]"
			clearable
			@change="update"
			placeholder="0"
			@keyup.enter="keyUpEnter"
			@input="e => inputValue(e, 0)"
		>
		</el-input>
		<div class="mid_text">-</div>
		<el-input
			:disabled="disabled"
			v-model="value[1]"
			clearable
			@change="update"
			placeholder="正无穷"
			@keyup.enter="keyUpEnter"
			@input="e => inputValue(e, 1)"
		>
		</el-input>
	</div>
</template>

<script lang="ts">
import { toRefs, reactive, defineComponent, watch, nextTick } from 'vue';
interface stateModel {
	value: any;
}
export default defineComponent({
	name: 'DigitalRange',
	emits: ['update:modelValue', 'change', 'input'],
	props: {
		modelValue: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		formatting: {
			type: String,
			default: 'numberAbsRange',
		},
		keyUpEnter: {
			type: Function,
			default: () => {},
		},
	},
	setup(props, { emit }) {
		let state = reactive<stateModel>({
			value: ['', ''],
		});

		const formatting = () => {
			// 只能输入正整数类型的字符串,并且对比大小
			if (props.formatting === 'numberAbsRange') {
				let oldMin = parseInt(state.value[0]);
				let oldMax = parseInt(state.value[1]);
				const newValue = [
					isNaN(oldMin) ? '' : Math.abs(oldMin),
					isNaN(oldMax) ? '' : Math.abs(oldMax),
				];
				if (
					newValue.every((item) => {
						return item || item === 0;
					})
				) {
					state.value = newValue.sort((i1: any, i2: any) => {
						return i1 - i2;
					});
				} else {
					state.value = newValue;
				}
			}
		};

		const update = () => {
			formatting();
			nextTick();
			emit('update:modelValue', state.value);
		};
		const inputValue = (e: any, index: number) => {
			emit('input', e, index);
		}

		// 监听父子value的变化
		watch(
			() => props.modelValue,
			(newValue) => {
				if (newValue) {
					state.value = newValue;
				} else {
					state.value = ['', ''];
				}
				formatting();
				emit('change', state.value);
			},
			{
				immediate: true,
				deep: true
			}
		);

		return {
			...toRefs(state),
			update,
			inputValue,
		};
	},
});
</script>

<style scoped>
.widght_box {
	width: 100%;
	display: flex;
}
.widght_box .el-input {
	width: 40% !important;
}
.mid_text {
	width: 20%;
	text-align: center;
	cursor: default;
}
</style>
