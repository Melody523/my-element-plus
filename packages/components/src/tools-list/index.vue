<template>
  <div class="tools_list">
    <div
      :class="`tool_button reset_button mrgr_12 ${
        disabled ? 'is_disabled' : ''
      }`"
      @click="
        () => {
          !disabled && emit('onReset');
        }
      "
    >
      重置
    </div>
    <div
      :class="`tool_button search_button mrgr_12 ${
        disabled ? 'is_disabled' : ''
      }`"
      @click="
        () => {
          !disabled && emit('onSearchSubmit');
        }
      "
    >
      搜索
    </div>
    <div
      :class="`tool_button show_control_icon mrgr_12 ${
        !show ? 'transform_rotate' : ''
      } `"
      v-if="hasShow"
      @click="
        () => {
          !disabled && emit('changeShow');
        }
      "
    >
      <svg-icon
        :class="`${disabled ? 'is_disabled' : ''}`"
        iconName="icon-jiantou"
        color="#999"
      ></svg-icon>
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
} from "vue";
export default defineComponent({
  name: "ToolsList",
  emits: ["update:modelValue", "onReset", "onSearchSubmit", "changeShow"],
  props: ["show", "hasShow", "disabled"],
  setup(_, { emit }) {
    let state = reactive<any>({});

    return {
      ...toRefs(state),
      emit,
    };
  },
  components: {
    MenuButton: defineAsyncComponent(() => import("../menu-button/index.vue")),
    SvgIcon: defineAsyncComponent(
      () => import("../icon/index.vue")
    ),
  },
});
</script>

<style scoped lang="less">
.tools_list {
  display: flex;
  justify-content: flex-end;
  height: 32px;
}
.tool_button {
  height: 32px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  box-sizing: border-box;
}
.reset_button {
  width: 55px;
  background: #ffffff;
  border: 1px solid #cccccc;
  color: #333333;
}
.search_button {
  width: 60px;
  background-color: #333333;
  color: #ffffff;
  &:hover {
    background-color: #202020;
  }
}
.mrgr_12 {
  margin-right: 12px;
}
.show_control_icon {
  width: 16px;
}
.transform_rotate {
  transform: rotate(180deg);
}
.is_disabled {
  cursor: not-allowed;
}
:deep(.svg-icon) {
  width: 16px;
  height: 16px;
}
</style>
