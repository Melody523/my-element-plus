# MenuButton 下拉菜单按钮

## 基础用法

基础下拉菜单按钮用法。
::: demo 使用`buttonTitle`设置按钮标题，`menuList`设置下拉菜单列表，`buttonType`设置按钮类型，可选`default`、`primary`、`plain`。

```vue
<template>
  <div>
    <div class="button_box">
      <MenuButton buttonTitle="下拉菜单按钮" :menuList="menuList"></MenuButton>
      <MenuButton
        buttonType="primary"
        buttonTitle="下拉菜单按钮"
        :menuList="menuList"
      ></MenuButton>
      <MenuButton
        buttonType="plain"
        buttonTitle="下拉菜单按钮"
        :menuList="menuList"
      ></MenuButton>
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      menuList: [
        { key: "add", label: "新增", onClick: () => {} },
        { key: "edit", label: "编辑", onClick: () => {} },
      ],
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

按钮不可用状态。
::: demo 使用`disabled`属性来定义按钮是否可用，`Boolean`值。

```vue
<template>
  <div>
    <div class="button_box">
      <MenuButton buttonTitle="禁用下拉菜单按钮" disabled></MenuButton>
    </div>
  </div>
</template>
```

:::

## 触发对象

按钮整体触发或右侧`icon`触发。
::: demo 使用`dropdownModel`属性来定义，可选值`same`和`other`。

```vue
<template>
  <div>
    <div class="button_box">
      <MenuButton
        buttonTitle="same触发对象"
        dropdownModel="same"
        :menuList="menuList"
      ></MenuButton>
      <MenuButton
        buttonTitle="other触发对象"
        dropdownModel="other"
        :menuList="menuList"
      ></MenuButton>
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      menuList: [
        { key: "add", label: "新增", onClick: () => {} },
        { key: "edit", label: "编辑", onClick: () => {} },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```

:::

## 触发方式

可以配置 click 激活或者 hover 激活。
::: demo 使用`trigger`属性来定义，可选值`click`和`hover`。

```vue
<template>
  <div>
    <div class="button_box">
      <MenuButton
        buttonTitle="click触发方式"
        trigger="click"
        :menuList="menuList"
      ></MenuButton>
      <MenuButton
        buttonTitle="hover触发方式"
        trigger="hover"
        :menuList="menuList"
      ></MenuButton>
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      menuList: [
        { key: "add", label: "新增", onClick: () => {} },
        { key: "edit", label: "编辑", onClick: () => {} },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```

:::

## 不同尺寸

MenuButton 组件提供两种尺寸。
::: demo 使用`size`属性来定义按钮大小，分别有`large`和`small`。

```vue
<template>
  <div>
    <div class="button_box">
      <MenuButton
        buttonTitle="下拉菜单按钮"
        size="large"
        :menuList="menuList"
      ></MenuButton>
      <MenuButton
        buttonTitle="下拉菜单按钮"
        size="small"
        :menuList="menuList"
      ></MenuButton>
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      menuList: [
        { key: "add", label: "新增", onClick: () => {} },
        { key: "edit", label: "编辑", onClick: () => {} },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```

:::

## 组件模式

通过 model 控制组件下拉菜单可配置 menuList 或插槽自定义。
::: demo 使用`model`属性来定义组件模式，分别有`contant`和`menuList`。

```vue
<template>
  <div>
    <div class="button_box">
      <MenuButton
        buttonTitle="menuList组件模式"
        model="menuList"
        :menuList="menuList"
      ></MenuButton>
      <MenuButton buttonTitle="contant组件模式" model="contant">
        <template v-slot:contant>
          <div class="contant-box">contant组件模式下拉菜单</div>
        </template>
      </MenuButton>
    </div>
  </div>
</template>
<script lang="ts">
const { reactive, defineComponent, toRefs } = Vue;
export default defineComponent({
  setup() {
    const state = reactive<any>({
      menuList: [
        { key: "add", label: "新增", onClick: () => {} },
        { key: "edit", label: "编辑", onClick: () => {} },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.contant-box {
  padding: 20px;
  background: #fff;
}
</style>
```

:::

## Attributes

| 参数          | 说明           | 类型    | 可选值                | 默认值   |
| :------------ | :------------- | :------ | :-------------------- | :------- |
| buttonType    | 按钮类型       | string  | default/primary/plain | default  |
| buttonTitle   | 按钮名称       | string  | -                     | 按钮     |
| menuList      | 下拉菜单组     | array   | -                     | []       |
| model         | 组件模式       | string  | contant/menuList      | menuList |
| disabled      | 是否禁用       | boolean | -                     | false    |
| trigger       | 触发方式       | string  | click/hover           | hover    |
| dropdownModel | 下拉按钮的类型 | string  | same/other            | other    |
| size          | 尺寸           | string  | large/small           | large    |

## Events

| 事件名称          | 说明                     | 回调参数                           |
| :---------------- | :----------------------- | :--------------------------------- |
| onControlDropdown | 下拉菜单显示或隐藏时触发 | {flag} 返回显示或隐藏的 boolean 值 |
| onClick           | 主按钮点击时触发         | -                                  |

## Slot

| 插槽名称 | 说明               |
| :------- | :----------------- |
| contant  | 下拉菜单自定义内容 |
