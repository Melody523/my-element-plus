# DatePicker 日期选择器

用于选择日期范围、指定日之前、指定日之后、当日之前、当日之后。支持时间范围选择。

## 基础用法

日期选择器基础用法。
::: demo 使用`selectTime`启用时间模式。

```vue
<template>
  <div>
    <div class="date_picker_box">
      <DatePicker v-model="datePicker" />
      <DatePicker v-model="timeDatePicker" :selectTime="true" />
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      datePicker: [],
      timeDatePicker: [],
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

| 参数             | 说明                         | 类型                   | 可选值 | 默认值 |
| :--------------- | :--------------------------- | :--------------------- | :----- | :----- |
| v-model          | 绑定值                       | array(DateRangePicker) | -      | -      |
| initFormat       | onChange 输出的时间格式控制  | string                 | -      | -      |
| startPlaceholder | 范围选择时开始日期的占位内容 | string                 | -      | -      |
| endPlaceholder   | 范围选择时结束日期的占位内容 | string                 | -      | -      |
| selectTime       | 启用时间模式                 | boolean                | -      | false  |
| disabled         | 是否禁用                     | boolean                | -      | false  |
| clearable        | 是否显示清除按钮             | boolean                | -      | false  |

## Events

| 事件名称 | 说明             | 回调参数 |
| :------- | :--------------- | :------- |
| clear    | 清空时触发       | -        |
| change   | 选择值改变时触发 | 改变的值 |
