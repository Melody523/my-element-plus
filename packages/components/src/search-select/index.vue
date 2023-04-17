<template>
  <InputAndButoon
    v-bind="{
      isUse: !!initItem.ruleOutKey,
      disabled: disabled,
      initValue: ruleValue,
    }"
    @click="onDialogShow(initItem.ruleOutKey, initItem)"
  >
    <template v-slot:com>
      <div class="widght_box">
        <el-select
          v-model="inputValue"
          :multiple="initMultiple"
          filterable
          :value-key="rowKey"
          remote
          :remote-method="onSearch"
          :loading="loading"
          :disabled="disabled"
          :clearable="false"
          :placeholder="`${
            initItem.placeholder || '请输入关键词搜索或选择'
          }`"
          @change="onSelect"
          :collapse-tags="true"
          :max-collapse-tags="1"
          :collapse-tags-tooltip="true"
          @visible-change="visibleChange"
        >
          <el-option
            v-for="item in options"
            :key="item[rowKey]"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div class="control_button">
          <i
            v-show="isClear && !disabled"
            @click.stop="
              () => {
                !disabled &&
                  onSearchClear(
                    initItem.clearData,
                    initItem.key,
                    initItem.callback
                  );
              }
            "
            class="clear_button el-icon el-input__icon el-input__clear"
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
              ></path>
              <path
                fill="currentColor"
                d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
              ></path>
            </svg>
          </i>
          <svg-icon
            v-if="!initItem.searchApi"
            :color="disabled ? '#a8abb2' : '#666666'"
            iconName="icon-a-xuanzeqi"
            :className="`button_padding button_point ${
              disabled ? 'button_point_disabled' : ''
            }`"
            @click.stop="
              () => {
                !disabled && onDialogShow(initItem.key, initItem);
              }
            "
          ></svg-icon>
        </div>
      </div>
    </template>
  </InputAndButoon>
</template>

<script lang="ts">
import {
  toRefs,
  reactive,
  defineComponent,
  watch,
  defineAsyncComponent,
  computed,
  PropType,
} from "vue";

// 组件初始化数据接口
interface ICompStateData {
  inputValue: any;
  loading: boolean;
  options: Array<any>;
  ruleValue: string;
  isClear: boolean;
  query: string;
  isVisible: boolean;
}

export default defineComponent({
  name: "SearchSelect",
  emits: [
    "update:modelValue",
    "onDialogShow",
    "onSearchClear",
    "change",
    "custDialog",
  ],
  props: {
    modelValue: {
      type: (Array as () => Array<any>) || (Object as () => any),
      // default: () => [],  // 兼容underfind的情况不能给默认数据
    },
    // 排除对应的key
    ruleModel: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 下拉选项的唯一标识
    rowKey: {
      type: String,
      default: "id",
    },
    // 是否启用多选
    initMultiple: {
      type: Boolean,
      default: true,
    },
    // 外部下拉基于什么key进行筛选 同时作为label值
    searchBy: {
      type: String,
      default: "",
    },
    // 简化数据项，自行约定，建议：必须有rowKey合searchBy
    catchValue: {
      type: Array as () => Array<string>,
      default: () => ["id", "code", "name"],
    },
    // item配置参数
    initItem: {
      type: Object as () => any,
      default: () => ({}),
    },
    // 回显table数据
    checkTable: {
      type: Array as () => Array<any>,
      default: () => [],
    },
    // options lable 自定义
    labelWith: {
      type: Array as () => Array<string>,
      default: () => [],
    },
    // options lable 自定义
    labelFormat: {
      type: Function,
    },
    // 是否返回所有数据，不做过滤
    catchValueAll: {
      type: Boolean,
      default: false,
    },
    // 请求接口
    fetchUrl: {
      type: Function as PropType<(data: any) => Promise<any>>,
    },
    // 请求结果的处理函数
    renderFunc: {
      type: Function,
      default: (res: any) => res,
    },
    // 请求前的form处理函数
    dealFetchFunc: {
      type: Function,
      default: (res: any) => res,
    },
    // 请求params
    params: {
      type: Object,
      default: {},
    },
    // 表格初始值
    initialDataSource: {
      type: Array as () => Array<any>,
      default: () => [],
    },
    // 翻页params
    pagination: {
      type: Object,
      default: { currentPage: 1, pageSize: 15 },
    },
  },
  setup(props, { emit }) {
    let state = reactive<ICompStateData>({
      inputValue: [],
      loading: false,
      options: [],
      ruleValue: "",
      isClear: false,
      query: "",
      isVisible: false,
    });
    // ----------------获取单据属性模板（基础数据接口专用）end----------------------------

    /**
     * 选择数据（包括select选择和弹窗选择）
     * 触发数据改变。组件相关的变化 根据watch得value进行处理
     * 这里只做将数据抛出
     */
    const onSelect = (val: any) => {
      let _val = props.initMultiple ? val : val ? [val] : [];
      emit("update:modelValue", _val);
      emit("custDialog", { list: _val }, props.initItem.key);
    };

    /**
     * 设置options
     * 根据已选值或者搜索值进行options的设置
     */
    const setOptions = (
      res: any,
      addInputValue = false,
      addOptions = false
    ) => {
      let newOptions: any = [];
      if (res && res.length > 0) {
        newOptions = [...res];
      }
      if (addInputValue) {
        if (props.initMultiple) {
          newOptions = [...state.inputValue, ...newOptions];
        } else {
          if (state.inputValue && Object.keys(state.inputValue).length > 0) {
            newOptions = [state.inputValue, ...newOptions];
          } else {
            newOptions = [...newOptions];
          }
        }
      }
      if (addOptions) {
        newOptions = [
          ...newOptions,
          ...state.options.map((item: any) => {
            return item.value;
          }),
        ];
      }
      state.options = deleteRepeat(
        newOptions.map((item: any) => {
          return controlOptions(item);
        })
      );
    };
    const getParams = () => {
      let params = {
        ...props.pagination,
        ...props.params,
        ...(props.dealFetchFunc ? props.dealFetchFunc() : {}),
      };
      return params;
    };

    /**
     * onSearch
     * select组件进行输入之后的接口调用事件
     */
    const onSearch = (query: string, isDefault = false) => {
      if (!props.fetchUrl) return;
      if (query || isDefault) {
        state.query = query;
        state.loading = true;
        props
          .fetchUrl(props.dealFetchFunc(getParams))
          .then((res: any) => {
            if (query === state.query) {
              const { tableData } = props.renderFunc(res)
              setOptions(tableData, true, false);
            }
          })
          .catch((err: any) => {
            console.log("onSearch catch", err);
            setOptions([], false, false);
          })
          .finally(() => {
            state.loading = false;
          });
      }
    };

    const onDialogShow = (target: any, initItemData: any) => {
      emit("onDialogShow", target, initItemData);
    };

    // -------------------------util------------------------

    /**
     * 数据格式化
     *
     * 关于option数据格式化处理的方法
     * oldObject: 未格式化的数据
     * label: 自定义label取值通常是和searchBy取相同值
     * props.searchTargetKey: 设定的取值
     */
    const controlOptions = (oldObject: any) => {
      // debugger
      const getValue = {};
      if (props.catchValueAll) {
        Object.assign(getValue, oldObject);
      } else if (props.catchValue && props.catchValue.length > 0) {
        props.catchValue.forEach((element) => {
          getValue[element] = oldObject[element];
        });
      }

      /**
       * target Object
       *
       * return String
       */
      let newObjectLabel = (target: any) => {
        if (props.labelFormat) {
          return props.labelFormat(target);
        } else if (props?.labelWith?.length > 0) {
          return props?.labelWith
            .map((item: any) => {
              return oldObject?.[item];
            })
            .join(" ");
        } else {
          return target?.[props.searchBy];
        }
      };

      const newObject = {
        label: newObjectLabel(oldObject),
        value:
          Object.keys(getValue).length > 0
            ? { ...getValue }
            : {
                code: oldObject.code,
                name: oldObject.name,
                id: oldObject.id,
              },
      };
      newObject[props.rowKey] = oldObject[props.rowKey];
      return JSON.parse(JSON.stringify(newObject));
    };

    /**
     * 数组根据attrName 去重
     *
     * 1、在设置options时 已有值和查询回来的值可能存在重复
     * 		需要去重（需要在进行controlOptions简化数据之后进行去重避免后端数据过于杂乱）
     * 2、重选择器带回来的数据里面可能存在要选择的值需要根据id去重
     * arr：原数组
     * rowKey：针对的key（默认id）
     */
    const deleteRepeat = (arr: any) => {
      const res = new Map();
      const newData = arr.filter(
        (item: any) =>
          !res.has(item[props.rowKey]) && res.set(item[props.rowKey], 1)
      );
      return newData;
    };

    // 监听父子value的变化
    watch(
      () => props.modelValue,
      (val) => {
        // 判断modealVlaue类型限制组件类型选择，数组类型外的数据置为空数组
        if (!Array.isArray(val)) {
          if (
            (props.initItem?.useCheckTable && !val) ||
            !props.initItem?.useCheckTable
          ) {
            emit("update:modelValue", []);
            return;
          }
        }
        let _val = !props.initItem?.useCheckTable ? val : props?.checkTable;
        if (_val && _val?.length && Array.isArray(_val)) {
          state.inputValue = props.initMultiple ? _val : _val[0];
          setOptions(_val, false, true);
          emit("change", _val);
        } else {
          state.inputValue = props.initMultiple ? [] : "";
          setOptions([], false, false);
          emit("change", []);
        }
      },
      { deep: true, immediate: true }
    );

    watch(
      () => props.ruleModel,
      (newValue) => {
        state.ruleValue = newValue;
      },
      { deep: true, immediate: true }
    );

    const isClear = computed(() => {
      let rt = false;
      if (props.initMultiple) {
        if (state.inputValue && state.inputValue?.length > 0) {
          rt = true;
        }
      } else {
        if (state.inputValue) {
          rt = true;
        }
      }
      return rt;
    });

    const onSearchClear = (arg: any, key: string, callback: any) => {
			onSelect(props.initMultiple ? [] : '');
      emit("onSearchClear", arg, key, callback);
    };

    const visibleChange = (val: any) => {
      state.isVisible = val;
    };

    return {
      ...toRefs(state),
      onSearch,
      onSelect,
      controlOptions,
      deleteRepeat,
      onDialogShow,
      onSearchClear,
      visibleChange,
      isClear,
    };
  },
  components: {
    InputAndButoon: defineAsyncComponent(
      () => import("../input-and-button/index.vue")
    ),
  },
});
</script>

<style scoped lang="less">
.widght_box {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  :deep(.el-select) {
    width: 100%;
  }
  :deep(.el-select__tags) {
    max-width: calc(100% - 50px) !important;
    z-index: 1;
    @media (max-width: 1500px) {
      max-width: 78% !important;
    }
  }
  :deep(.el-select .el-select__tags-text) {
    display: inline-block;
    max-width: 85px !important;
    @media (max-width: 1700px) {
      max-width: 65px !important;
    }
    @media (max-width: 1600px) {
      max-width: 55px !important;
    }
    @media (max-width: 1500px) {
      max-width: 45px !important;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :deep(.el-select__input) {
    margin-left: 7px;
  }
  &:hover {
    .clear_button {
      display: inline-flex;
    }
  }
}
.button_border {
  border-radius: 5px;
}
.control_button {
  position: absolute;
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  z-index: 10;
  right: 0px;
  padding-right: 11px;
  align-items: center;
}
.button_padding {
  margin-left: 8px;
}
.button_point {
  cursor: pointer;
  width: 16px;
  height: 16px;
}
.button_point_disabled {
  cursor: not-allowed;
}
.clear_button {
  color: #909399;
  display: none;
}
.is_visible {
  transform: rotate(180deg);
}
</style>
