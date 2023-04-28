# Icon 图标

## 基础用法

直接通过设置类名为`iconName`来使用即可。
::: demo 使用`iconName`类名引用图标，`color`设置图标颜色，`className`设置图标类名。

```vue
<template>
  <div>
    <div class="icon_box">
      <Icon iconName="icon-sum"></Icon>
      <Icon iconName="icon-sum" color="red"></Icon>
      <Icon iconName="icon-sum" color="my-icon" className="my-icon"></Icon>
    </div>
  </div>
</template>
<style scoped>
.icon_box .my-icon.colorClass use {
  filter: drop-shadow(#000 80px 0);
}
</style>
```

:::

## 图标集合

::: demo 使用`iconName`类名引用图标，`color`设置图标颜色，`className`设置图标类名。

```vue
<template>
  <div>
    <div class="icon_box icon-content">
      <Icon color="#000" iconName="icon-xiangshang"></Icon>
      <Icon color="#000" iconName="icon-xiangxia"></Icon>
      <Icon color="#000" iconName="icon-fangda"></Icon>
      <Icon color="#000" iconName="icon-a-xuanzeqi"></Icon>
      <Icon color="#000" iconName="icon-mingxi"></Icon>
      <Icon color="#000" iconName="icon-paichuzhi"></Icon>
      <Icon color="#000" iconName="icon-fuzhi"></Icon>
      <Icon color="#000" iconName="icon-save"></Icon>
      <Icon color="#000" iconName="icon-clear"></Icon>
      <Icon color="#000" iconName="icon-set"></Icon>
      <Icon color="#000" iconName="icon-jiantou"></Icon>
      <Icon color="#000" iconName="icon-three-bars"></Icon>
      <Icon color="#000" iconName="icon-th"></Icon>
      <Icon color="#000" iconName="icon-tianjia"></Icon>
      <Icon color="#000" iconName="icon-sheji"></Icon>
      <Icon color="#000" iconName="icon-guanji"></Icon>
      <Icon color="#000" iconName="icon-chaqi"></Icon>
      <Icon color="#000" iconName="icon-infofill"></Icon>
      <Icon color="#000" iconName="icon-success"></Icon>
      <Icon color="#000" iconName="icon-copy"></Icon>
      <Icon color="#000" iconName="icon-sum"></Icon>
      <Icon color="#000" iconName="icon-liebiaoshezhi"></Icon>
      <Icon color="#000" iconName="icon-jiazai"></Icon>
      <Icon color="#000" iconName="icon-shaixuan"></Icon>
    </div>
  </div>
</template>
<style scoped>
.icon-content .svg-icon {
  width: 45px !important;
  height: 45px !important;
  margin: 0 20px 20px 0 !important;
}
.icon-content .svg-icon:hover use {
  filter: drop-shadow(#0b4edb 80px 0);
}
</style>
```

:::

## Attributes

| 参数      | 说明       | 类型   | 可选值 | 默认值 |
| :-------- | :--------- | :----- | :----- | :----- |
| iconName  | 图标名称   | string | 必填   | -      |
| className | 自定义类名 | string | -      | -      |
| color     | 图标颜色   | string | -      | -      |
