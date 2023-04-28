# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。
::: demo 使用`type`属性来定义 Button 的样式。

```vue
<template>
  <div>
    <div class="button_box">
      <Button type="plain">plain按钮</Button>
      <Button>default按钮</Button>
      <Button type="primary">primary按钮</Button>
      <Button type="warning">warning按钮</Button>
      <Button type="danger">danger按钮</Button>
      <Button type="text">text按钮</Button>
    </div>
  </div>
</template>
```

:::

## 禁用状态

按钮不可用状态。
::: demo 使用`disabled`属性来定义按钮是否可用，`Boolean`值。

```vue
<template>
  <div>
    <div class="button_box">
      <Button type="plain" disabled>plain按钮</Button>
      <Button disabled>default按钮</Button>
      <Button type="primary" disabled>primary按钮</Button>
      <Button type="warning" disabled>warning按钮</Button>
      <Button type="danger" disabled>danger按钮</Button>
      <Button type="text" disabled>text按钮</Button>
    </div>
  </div>
</template>
```

:::

## 图标按钮

图标和文字可结合显示按钮。
::: demo 使用`iconType`区分是`svg`和`slot`按钮类型，可设置`icon`显示图标，参考`Icon`组件， 通过`slot`自定义图标。`model`默认`normal`,为`icon`时图标会放大,

```vue
<template>
  <div>
    <div class="button_box">
      <Button iconType="svg" icon="icon-copy">icon按钮</Button>
      <Button model="icon" iconType="svg" icon="icon-copy" />
      <Button iconType="svg" icon="icon-copy" />
      <Button iconType="slot">
        <template v-slot:icon>A</template>
        插槽icon的按钮
      </Button>
    </div>
  </div>
</template>
```

:::

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。
::: demo 使用`loading`属性来定义按钮是否加载中，`Boolean`值。

```vue
<template>
  <div>
    <div class="button_box">
      <Button loading>操作按钮</Button>
    </div>
  </div>
</template>
```

:::

## 不同尺寸

Button 组件提供两种尺寸。
::: demo 使用`size`属性来定义按钮大小，分别有`large`和`small`。

```vue
<template>
  <div>
    <div class="button_box">
      <Button size="large">操作按钮</Button>
      <Button size="small">操作按钮</Button>
    </div>
  </div>
</template>
```

:::

## 常驻 hover

Button 时候保持 hover 样式。
::: demo 使用`isHover`属性来定义按钮是否`hover`，`Boolean`值。

```vue
<template>
  <div>
    <div class="button_box">
      <Button isHover>操作按钮</Button>
    </div>
  </div>
</template>
```

:::

## Attributes

| 参数     | 说明                                | 类型    | 可选值                                    | 默认值  |
| :------- | :---------------------------------- | :------ | :---------------------------------------- | :------ |
| type     | 按钮类型                            | string  | default/danger/primary/plain/text/warning | default |
| size     | 按钮尺寸                            | string  | small/large                               | large   |
| model    | 按钮模式                            | string  | normal/icon                               | normal  |
| disabled | 是否禁用                            | boolean | -                                         | false   |
| loading  | 是否加载中                          | boolean | -                                         | false   |
| icon     | icon 名称,仅支持 icon 组件中的类名  | string  | -                                         | -       |
| iconType | 引用 icon 的类型 暂支持 svg 和 slot | string  | svg/slot                                  | svg     |
| isHover  | 是否常驻 hover                      | boolean | -                                         | false   |

## Events

| 事件名称 | 说明       | 回调参数 |
| :------- | :--------- | :------- |
| click    | 点击后触发 | -        |

## Slot

| 插槽名称 | 说明       |
| :------- | :--------- |
| default  | 按钮的内容 |
| icon     | 图标插槽   |
