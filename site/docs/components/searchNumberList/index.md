# DigitalRange 多单号输入

用于输入多值数据，并设置排除项。得到的值是字符串格式，需要进行切割为数组。

## 基础用法

用于输入多值数据，并设置排除项。
::: demo `v-model`绑定的是输入框的值，`v-model:ruleModel`绑定的是排除项的值，通过`modelProps`的属性`ruleOutKey`设置排除项的`key`。

```vue
<template>
  <div>
    <div class="search_number_list_box">
      <SearchNumberList
        v-model="searchNumberList_1"
        v-model:ruleModel="ruleOutKey_1"
        :modelProps="{ ruleOutKey: 'ruleOutKey_1' }"
      />
      <SearchNumberList v-model="searchNumberList_2" />
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      searchNumberList_1: "",
      ruleOutKey_1: "",
      searchNumberList_2: "",
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```

:::

## 禁用状态

多单号输入不可用状态。
::: demo 使用`disabled`属性来定义多单号输入是否可用，`Boolean`值。

```vue
<template>
  <div>
    <div class="search_number_list_box">
      <SearchNumberList
        v-model="searchNumberList_1"
        v-model:ruleModel="ruleOutKey_1"
        :modelProps="{ ruleOutKey: 'ruleOutKey_1' }"
        :disabled="true"
      />
      <SearchNumberList v-model="searchNumberList_2" :disabled="true" />
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      searchNumberList_1: "",
      ruleOutKey_1: "",
      searchNumberList_2: "",
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

| 参数              | 说明                     | 类型     | 可选值 | 默认值 |
| :---------------- | :----------------------- | :------- | :----- | :----- |
| v-model           | 绑定值                   | string   | -      | -      |
| v-model:ruleModel | 绑定的是排除项的值       | string   | -      | -      |
| disabled          | 是否禁用                 | boolean  | -      | false  |
| placeholder       | 占位符                   | string   | -      | -      |
| keyUpEnter        | 键盘 enter 键回调        | function | -      | -      |
| modelProps        | 组件配置 config,参考下表 | Object   | -      | -      |

## modelProps

| 参数       | 说明             | 类型   | 可选值 | 默认值 |
| :--------- | :--------------- | :----- | :----- | :----- |
| ruleOutKey | 排除项的 key     | string | -      | -      |
| ruleTitle  | 排除项的弹窗标题 | string | -      | -      |
| maxLength  | 最大的输入行数   | number | -      | -      |

## Events

| 事件名称 | 说明             | 回调参数 |
| :------- | :--------------- | :------- |
| clear    | 清空时触发       | -        |
| change   | 输入值改变时触发 | 改变的值 |
