<template>
  <div class="input_and_button_box" v-if="isUse">
    <div class="contant_flex_box">
      <slot name="com"></slot>
    </div>
    <el-tooltip class="box-item" effect="dark" content="排除值" placement="top">
      <div
        :class="{
          filter_button: true,
          filter_button_hasout: outPut > 0,
          filter_button_disabled: disabled,
        }"
        @click="
          () => {
            !disabled && emit('click', '');
          }
        "
      >
        <svg-icon
          :color="disabled ? '#a8abb2' : outPut > 0 ? '#256bff' : '#666666'"
          iconName="icon-paichuzhi"
          :className="`icon_box ${outPut > 0 ? 'icon_box_hasout' : ''}`"
        ></svg-icon>
        <span v-if="outPut > 0" class="span_number">{{ outPut || "" }}</span>
      </div>
    </el-tooltip>
  </div>
  <slot name="com" v-else></slot>
</template>

<script lang="ts">
// 修饰输入框，在其后面添加一个按钮
import { toRefs, reactive, defineComponent, watch, computed, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "InputAndButton",
  emits: ["click"],
  props: {
    isUse: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 徽标计数 通过数组长度 字符串切割长度 直接传数量
    initValue: {
      type: String || Array || Number,
      default: "",
    },
  },
  setup(props, { emit }) {
    let state = reactive<any>({
      outPut: 0,
    });

    state.outPut = computed(() => {
      if (typeof props.initValue === "number") return props.initValue;
      return typeof props.initValue === "string"
        ? props.initValue && (props.initValue as string)?.split(",")?.length
        : (props.initValue as Array<any>)?.length;
    });

    return {
      ...toRefs(state),
      emit,
    };
  },
  components: {
    SvgIcon: defineAsyncComponent(
      () => import("../icon/index.vue")
    ),
  },
});
</script>

<style scoped lang="less">
.input_and_button_box {
  display: flex;
  width: 100%;
}
.filter_button {
  margin-left: 8px;
  min-width: 32px;
  padding: 0 3px;
  height: 32px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.filter_button_disabled {
  cursor: not-allowed;
  background-color: #f5f7fa;
  border-color: #e4e7ed;
}
.filter_button_hasout {
  color: #256bff;
  border-color: #256bff;
  background-color: #eaf3ff;
}
.contant_flex_box {
  flex: 1;
}
.icon_box {
  width: 16px;
  height: 16px;
}
.span_number {
  padding-left: 3px;
}
.icon_box_hasout {
  color: #256bff;
}
</style>
