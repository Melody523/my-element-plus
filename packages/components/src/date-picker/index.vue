<template>
  <div class="date_picker_class">
    <div>
      <!-- :key 必要项 提供给vue3做diff算法对比前后key进行dom元素更新替换 -->
      <el-date-picker
        :popper-class="`pagination-popper ${classKey}`"
        ref="datePickerRef"
        v-model="value"
        :type="dateType"
        :shortcuts="shortcuts"
        :key="classKey"
        :format="format || (selectTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')"
        @change="onChange"
        :placeholder="`${
          ['dateBefore', 'nowDateBefore'].includes(classKey)
            ? '请选择结束时间'
            : '请选择起始时间'
        }`"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        @visible-change="visibleChange"
        :disabled-date="disabledDate"
        :editable="false"
        :disabled="disabled"
        :clearable="clearable"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { useCurrentInstance } from "../utils/utils";
import { toRefs, reactive, defineComponent, ref, watch, computed } from "vue";
export default defineComponent({
  name: "DatePicker",
  emits: ["update:modelValue", "clear", "change"],
  props: {
    // 主参数
    modelValue: {
      type: Array as () => Array<any>,
      default: () => [],
    },
    // onChange输出的时间格式控制
    initFormat: {
      type: String,
      default: "",
    },
    startPlaceholder: {
      type: String,
      default: "开始日期",
    },
    endPlaceholder: {
      type: String,
      default: "结束日期",
    },
    // 启用时间模式
    selectTime: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    }
  },
  setup(props, { emit }) {
    const { globalProperties } = useCurrentInstance();

    let state: any = reactive<any>({
      dateType: props.selectTime ? "datetimerange" : "daterange", // 选择器type变量
      value: "", // 组件内value变量
      datePickerRef: ref(null),
      classKey: "daterange", // 输入模式类型标识变量
      format: "", // 不同组件输入模式下的的时间格式变量
    });
    // 侧边菜单
    const shortcuts = [
      {
        text: "时间范围",
        value: () => {
          checkBoxControl("daterange");
          onChange(null);
          setTimeout(() => {
            state.datePickerRef.focus(true);
          }, 0);
        },
      },
      {
        text: "指定日之前",
        value: () => {
          checkBoxControl("dateBefore");
          onChange(null);
          setTimeout(() => {
            state.datePickerRef.focus(true);
          }, 0);
        },
      },
      {
        text: "指定日之后",
        value: () => {
          checkBoxControl("dateAfter");
          onChange(null);
          setTimeout(() => {
            state.datePickerRef.focus(true);
          }, 0);
        },
      },
      {
        text: "当日之前",
        value: () => {
          checkBoxControl("nowDateBefore");
          onChange(formatDate(Date(), "YYYY-MM-DD 23:59:59"));
        },
      },
      {
        text: "当日之后",
        value: () => {
          checkBoxControl("nowDateAfter");
          onChange(formatDate(Date(), "YYYY-MM-DD 00:00:00"));
        },
      },
    ];
    let formatStr = computed(() =>
      props.selectTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
    ).value;
    // 控制侧边菜单样式
    const checkBoxControl = (target: string) => {
      const dateType = props.selectTime ? "datetime" : "date";
      switch (target) {
        case "daterange":
          state.dateType = props.selectTime ? "datetimerange" : "daterange";
          state.format = "";
          break;
        case "dateBefore":
        case "nowDateBefore":
          state.dateType = dateType;
          state.format = `~ 至 ${formatStr}`;
          break;
        case "dateAfter":
        case "nowDateAfter":
          state.dateType = dateType;
          state.format = `${formatStr} 至 ~`;
          break;
        default:
          break;
      }
      state.classKey = target;
    };

    // 时间处理
    const formatDate = (date: any, format?: any) => {
      return date
        ? globalProperties
            .dayjs(date)
            .format(format || props.initFormat || formatStr)
        : "";
    };

    const onChange = (value: any) => {
      // clear
      if (!value) {
        if (["dateBefore", "dateAfter"].includes(state.classKey)) {
          emit("update:modelValue", ["", "", state.classKey]);
        } else {
          emit("update:modelValue", ["", "", "daterange"]);
        }
        emit("clear", value);
        return;
      }
      // 正常onChange
      let outPutValue: any = [];
      switch (state.classKey) {
        case "daterange":
          outPutValue = [
            formatDate(value[0]),
            formatDate(value[1]),
            state.classKey,
          ];
          break;
        case "dateBefore":
        case "nowDateBefore":
          outPutValue = ["", formatDate(value), state.classKey];
          break;
        case "dateAfter":
        case "nowDateAfter":
          outPutValue = [formatDate(value), "", state.classKey];
          break;
        default:
          break;
      }
      emit("update:modelValue", outPutValue);
    };
    // 监听外部数据变化，同步组件内部状态
    watch(
      () => props.modelValue,
      (newValue: any) => {
        // 默认返回值
        if (newValue && newValue.length > 0) {
          if (newValue[2]) {
            checkBoxControl(newValue[2]);
            switch (newValue[2]) {
              case "daterange":
                state.value = [newValue[0], newValue[1]];
                break;
              case "dateBefore":
                state.value = newValue[1];
                break;
              case "dateAfter":
                state.value = newValue[0];
                break;
              case "nowDateBefore":
                state.value = formatDate(Date(), "YYYY-MM-DD 23:59:59");
                break;
              case "nowDateAfter":
                state.value = formatDate(Date(), "YYYY-MM-DD 00:00:00");
                break;
              default:
                break;
            }
          } else {
            if (newValue[0] && newValue[1]) {
              checkBoxControl('daterange');
              state.value = newValue;
            } else if (newValue[0]) {
              checkBoxControl('dateAfter');
              state.value = newValue[0];
            } else if (newValue[1]) {
              checkBoxControl('dateBefore');
              state.value = newValue[1];
            }
          }
        } else {
          checkBoxControl("daterange");
          state.value = "";
        }
        emit("change", state.value);
      },
      { deep: true, immediate: true }
    );

    const visibleChange = (status: any) => {
      if (props.selectTime) {
        if (status) {
          if (
            [
              "dateBefore",
              "dateAfter",
              "nowDateBefore",
              "nowDateAfter",
            ].includes(state.classKey)
          ) {
            state.format = "";
          }
        } else {
          if (["dateBefore", "nowDateBefore"].includes(state.classKey)) {
            state.format = `~ 至 ${formatStr}`;
          }
          if (["dateAfter", "nowDateAfter"].includes(state.classKey)) {
            state.format = `${formatStr} 至 ~`;
          }
        }
      }
    };

    const disabledDate = (date: any) => {
      return ["nowDateBefore", "nowDateAfter"].includes(state.classKey);
    };

    return {
      ...toRefs(state),
      shortcuts,
      onChange,
      visibleChange,
      disabledDate,
    };
  },
});
</script>

<style scoped lang="less">
.date_picker_class {
  width: 100%;
  :deep(.el-tooltip__trigger) {
    width: 100%;
  }
  :deep(.el-input__wrapper) {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
<style lang="less">
.daterange .el-picker-panel__shortcut:nth-child(1),
.dateBefore .el-picker-panel__shortcut:nth-child(2),
.dateAfter .el-picker-panel__shortcut:nth-child(3),
.nowDateBefore .el-picker-panel__shortcut:nth-child(4),
.nowDateAfter .el-picker-panel__shortcut:nth-child(5) {
  color: var(--el-datepicker-hover-text-color) !important;
}
.pagination-popper {
  z-index: 999999 !important;
}
</style>
