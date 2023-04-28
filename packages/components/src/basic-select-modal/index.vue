<template>
  <div class="basic_select_modal_content">
    <InputAndButoon
      v-bind="{
        isUse: !!initItem?.ruleOutKey,
        disabled: disabled,
        initValue: ruleValue,
      }"
      @click="onDialogShow(initItem.ruleOutKey)"
    >
      <template v-slot:com>
        <div class="widght_box">
          <el-input
            :placeholder="placeholder"
            ref="inputRef"
            :model-value="inputValue"
            :disabled="disabled"
            :class="`my-input ${disabled ? 'my_input_disabled' : ''}`"
            @click="onDialogShow(initItem.key)"
            clearable
            @clear="
              onSearchClear(initItem.clearData, initItem.key, initItem.callback)
            "
            @focus="onFocus"
          >
            <template v-slot:suffix>
              <svg-icon
                :color="disabled ? '#a8abb2' : '#666666'"
                iconName="icon-a-xuanzeqi"
                :className="`button_point ${
                  disabled ? 'button_point_disabled' : ''
                }`"
                @click="
                  () => {
                    !disabled && onDialogShow(initItem.key);
                  }
                "
              ></svg-icon>
            </template>
          </el-input>
        </div>
      </template>
    </InputAndButoon>
  </div>
</template>

<script lang="ts">
import {
  toRefs,
  reactive,
  defineComponent,
  watch,
  defineAsyncComponent,
  ref,
  computed,
} from "vue";
export default defineComponent({
  name: "BasicSelectModal",
  emits: ["onDialogShow", "onSearchClear", "update:modelValue"],
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    // 排除项的值
    ruleModel: {
      type: String,
      default: "",
    },
    initItem: {
      type: Object,
      default: {},
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    let state = reactive<any>({
      inputValue: "",
      ruleValue: "",
      inputRef: ref(null),
    });

    const onDialogShow = (key: string) => {
      emit("onDialogShow", key, props.initItem);
    };

    const onSearchClear = (arg: any, key: string, callback: any) => {
      state.inputValue = ''
      emit("onSearchClear", arg, key, callback);
    };
    state.inputValue = computed({ // 重新定义
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    })
    state.ruleValue = computed(() => props.ruleModel);
    const onFocus = () => {
      state.inputRef.blur();
    };

    return {
      ...toRefs(state),
      onDialogShow,
      onSearchClear,
      onFocus,
    };
  },
  components: {
    InputAndButoon: defineAsyncComponent(
      () => import("../input-and-button/index.vue")
    ),
    SvgIcon: defineAsyncComponent(
      () => import("../icon/index.vue")
    ),
  },
});
</script>

<style scoped lang="less">
.basic_select_modal_content {
  width: 100%;
}
.my-input {
  :deep(.el-input__inner) {
    cursor: pointer;
  }
}
.my_input_disabled {
  :deep(.el-input__inner) {
    cursor: not-allowed;
  }
}
.widght_box {
  width: 100%;
}
.button_point {
  cursor: pointer;
  width: 16px;
  height: 16px;
}
.button_point_disabled {
  cursor: not-allowed;
}
:deep(.el-input__suffix-inner) {
  display: flex;
  flex-direction: row-reverse;
}
</style>
