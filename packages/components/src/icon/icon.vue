<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconClassName" :fill="color" />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Icon"
});
</script>
<script setup lang="ts">
import { computed, defineProps, defineExpose } from "vue";

const props = defineProps({
  iconName: {
    //图标名称: icon-copy
    type: String,
    required: true,
  },
  className: {
    //自定义类名
    type: String,
    default: "",
  },
  color: {
    //图标颜色
    type: String,
    default: "",
  },
});
// 图标在 iconfont 中的名字
const iconClassName = computed(() => {
  return `#${props.iconName}`;
});
// 给图标添加上类名
const svgClass = computed(() => {
  return `svg-icon ${props.color ? "colorClass" : ""} ${props.className}`;
});
defineExpose({ color: props.color });
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
  overflow: hidden;
  cursor: pointer;
  &.colorClass {
    &::after {
      content: "";
      position: relative;
      border-left: 4px solid transparent;
    }
    use {
      transform: translateX(-80px);
      filter: drop-shadow(v-bind(color) 80px 0);
    }
  }
}
</style>
