# DigitalRange 数字范围

用于输入数字范围区间。若前置值比后置值大时，前后值调换位置。

## 基础用法

用于输入数字范围区间。
::: demo

```vue
<template>
  <div>
    <div class="digital_range_box">
      <DigitalRange v-model="digitalRange"></DigitalRange>
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      digitalRange: [],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```

:::

## Attributes

| 参数       | 说明              | 类型     | 可选值 | 默认值 |
| :--------- | :---------------- | :------- | :----- | :----- |
| v-model    | 绑定值            | array    | -      | -      |
| disabled   | 是否禁用          | boolean  | -      | false  |
| clearable  | 是否显示清除按钮  | boolean  | -      | false  |
| keyUpEnter | 键盘 enter 键回调 | function | -      | -      |

## Events

| 事件名称 | 说明             | 回调参数                         |
| :------- | :--------------- | :------------------------------- |
| input    | 输入时触发       | val:改变的值, index:改变的输入框 |
| change   | 选择值改变时触发 | 改变的值                         |
