<template>
	<div class="widght_box">
		<el-input
			:disabled="disabled"
			v-model="leftVal"
			clearable
			@change="update"
			placeholder="0"
			@keyup.enter="keyUpEnter"
		>
		</el-input>
		<div class="mid_text">-</div>
		<el-input
			:disabled="disabled"
			v-model="rightVal"
			clearable
			@change="update"
			placeholder="正无穷"
			@keyup.enter="keyUpEnter"
		>
		</el-input>
	</div>
</template>

<script lang="ts">
import { toRefs, reactive, defineComponent, watch, nextTick, computed } from 'vue';
export default defineComponent({
	name: 'DigitalRange',
	emits: ['update:modelValue', 'change', 'input'],
	props: {
		modelValue: {
			type: Array,
			default: ['', ''],
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
		let state = reactive<any>({
			leftVal: '',
			rightVal: '',
		});

		const formatting = (val: any) => {
			// 只能输入正整数类型的字符串,并且对比大小
			if (props.formatting === 'numberAbsRange') {
				let oldMin = parseInt(val[0]);
				let oldMax = parseInt(val[1]);
				const newValue = [
					isNaN(oldMin) ? '' : Math.abs(oldMin),
					isNaN(oldMax) ? '' : Math.abs(oldMax),
				];
				if (
					newValue.every((item) => {
						return item || item === 0;
					})
				) {
					newValue.sort((i1: any, i2: any) => {
						return i1 - i2;
					});
				}
				const [leftVal, rightVal] = newValue
				state.leftVal = leftVal
				setTimeout(() => {
					state.rightVal = rightVal
				})
			}
		};

		const update = () => {
			formatting([state.leftVal, state.rightVal]);
			setTimeout(() => {
				emit('change', [state.leftVal, state.rightVal]);
			})
		};
		state.leftVal = computed({
			get: () => props.modelValue[0],
			set: (value) => emit("update:modelValue", [value, state.rightVal])
		})
		state.rightVal = computed({
			get: () => props.modelValue[1],
			set: (value) => emit("update:modelValue", [state.leftVal, value]),
		})

		return {
			...toRefs(state),
			update,
		};
	},
});
</script>

<style scoped>
.widght_box {
	width: 100%;
	display: flex;
	align-items: center;
}
.widght_box .el-input {
	flex: 1;
}
.mid_text {
	width: 20%;
	text-align: center;
	cursor: default;
}
</style>
