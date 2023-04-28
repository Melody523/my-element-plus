<template>
  <div
    :class="`menu_button_box ${buttonType}_button_box ${size}_button ${dropdownModel}_button_model ${disabled ? 'is_disabled' : ''}`"
  >
    <div class="other_button_title_box">
      <el-button
        v-if="dropdownModel === 'other'"
        :disabled="disabled"
        @click="emit('click', '')"
      >
        <span class="button_title">{{ buttonTitle }}</span></el-button
      >
    </div>
    <div class="dropdown_button_box">
      <el-dropdown
        @command="command"
        :trigger="trigger"
        placement="bottom"
        @visible-change="controlDropdown"
        :disabled="disabled"
      >
        <el-button>
          <span class="button_title" v-if="dropdownModel === 'same'">{{
            buttonTitle
          }}</span>
          <svg-icon
            color="icon_style"
            :iconName="isDropdown ? 'icon-xiangshang' : 'icon-xiangxia'"
            className="icon_style"
          ></svg-icon>
        </el-button>
        <template #dropdown>
          <template v-if="model === 'menuList'">
            <el-dropdown-menu v-if="menuList?.length > 0">
              <el-dropdown-item
                v-for="item in menuList"
                :key="item.key"
                :command="item.onClick"
                :disabled="item.disabled"
              >
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
          <template v-else-if="model === 'contant'">
            <slot name="contant"></slot>
          </template>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, defineComponent, reactive, defineAsyncComponent } from "vue";

interface ICompStateData {
  isDropdown: boolean;
}

// 组件初始化数据接口
export default defineComponent({
  name: "MenuButton",
  emits: ["click", "onControlDropdown"],
  props: {
    // 按钮类型default为边框蓝色背景白色，primary为蓝底白字, plain
    buttonType: {
      type: String,
      default: "default",
    },
    // 外侧按钮字样
    buttonTitle: {
      type: String,
      default: "按钮",
    },
    // 下拉菜单组
    menuList: {
      type: Array as () => Array<any>,
      default: () => [],
    },
    // 组件模式 contant | menuList | none
    model: {
      type: String,
      default: "menuList",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String,
      default: "hover",
    },
    // 下拉按钮的类型 same | other
    dropdownModel: {
      type: String,
      default: "other",
    },
    /**
     * 大小控制
     * large：height:32px
     * small: height:24px
     */
    size: {
      type: String,
      default: "large",
    },
  },
  setup(props, { emit }) {
    const state = reactive<ICompStateData>({
      isDropdown: false,
    });

    // 执行传入的方法
    const command = (onClick: () => void) => {
      onClick();
    };
    const controlDropdown = (flag: boolean) => {
      state.isDropdown = flag;
      emit("onControlDropdown", { flag });
    };

    return {
      ...toRefs(props),
      ...toRefs(state),
      command,
      emit,
      controlDropdown,
    };
  },
  components: {
    SvgIcon: defineAsyncComponent(
      () => import("../icon/index.vue")
    ),
  },
});
</script>

<style lang="less" scoped>
.default_button_box {
  --menu-border: 1px solid #256bff;
  --menu-background-color: #fff;
  --menu-color: #256bff;

  --menu-border-hover: 1px solid #256bff;
  --menu-color-hover: #256bff;
  --menu-background-color-hover: #eaf3ff;
}
.primary_button_box {
  --menu-border: none;
  --menu-background-color: #256bff;
  --menu-color: #fff;

  --menu-border-hover: none;
  --menu-color-hover: #fff;
  --menu-background-color-hover: #0b4edb;
}

.plain_button_box {
  --menu-border: 1px solid #cccccc;
  --menu-color: #333333;
  --menu-background-color: #fff;

  --menu-border-hover: 1px solid #256bff;
  --menu-color-hover: #256bff;
  --menu-background-color-hover: #fff;
}

// 只處理和same連用
.text_button_box {
  --menu-border: none;
  --menu-color: #333333;
  --menu-background-color: rgba(0, 0, 0, 0);

  --menu-border-hover: none;
  --menu-color-hover: #333333;
  --menu-background-color-hover: rgba(0, 0, 0, 0);
}

.same_button_model {
  --menu-default-width: auto;
  --menu-padding: 0px 8px 0px 12px !important;
  --menu-icon-border-left: var(--menu-border);
  --menu-icon-radius: 2px;
  --menu-icon-width: auto;
  --menu-icon-margin-left: 4px;
  --menu-icon-border-left-hover: var(--menu-border-hover);
}

.other_button_model {
  --menu-default-width: auto;
  --menu-icon-border-left: 1px solid #fff;
  --menu-button-radius: 2px 0px 0px 2px;
  --menu-icon-radius: 0px 2px 2px 0px;
  --menu-icon-width: var(--menu-height);
  --menu-icon-border-left-hover: 1px solid #fff;
}

.small_button {
  --menu-font-size: 12px;
  --menu-font-line-height: 20px;
  --menu-height: 24px;
  --menu-icon-size: 16px;
  --menu-padding: 0px 8px;
}

.large_button {
  --menu-font-size: 14px;
  --menu-font-line-height: 22px;
  --menu-height: 32px;
  --menu-icon-size: 16px;
  --menu-padding: 0px 12px;
}

.is_disabled {
  opacity: 0.5;
  :hover {
    cursor: not-allowed;
  }
  --menu-background-color-hover: var(--menu-background-color);
  --menu-color-hover: var(--menu-color);
  --menu-border-hover: var(--menu-border);
  // 設置禁用狀態下的按鈕顔色
}

.menu_button_box {
  display: flex;
	justify-content: center;
	align-items: center;
  .other_button_title_box {
		box-sizing: border-box;
		height: var(--menu-height);
    .el-button {
      width: var(--menu-default-width);
      box-sizing: border-box;
      border: var(--menu-border);
      background-color: var(--menu-background-color);
      border-radius: var(--menu-button-radius);
      height: var(--menu-height);
      padding: var(--menu-padding);
      .button_title {
        color: var(--menu-color);
        font-weight: 400;
        font-size: var(--menu-font-size);
        line-height: var(--menu-font-line-height);
      }
      &:hover {
        background-color: var(--menu-background-color-hover);
        border: var(--menu-border-hover);
        .button_title {
          color: var(--menu-color-hover);
        }
      }
      &:focus-visible {
        outline: 0 none;
        outline-offset: 0;
      }
    }
  }
  .dropdown_button_box {
		box-sizing: border-box;
		height: var(--menu-height);
		:deep(.el-dropdown) {
			vertical-align: middle;
		}
    .el-button {
      box-sizing: border-box;
      border: var(--menu-border);
      border-left: var(--menu-icon-border-left);
      background-color: var(--menu-background-color);
      border-radius: var(--menu-icon-radius);
      height: var(--menu-height);
      width: var(--menu-icon-width);
      padding: var(--menu-padding);
      .button_title {
        color: var(--menu-color);
        font-weight: 400;
        font-size: var(--menu-font-size);
        line-height: var(--menu-font-line-height);
      }
      .icon_style {
        color: var(--menu-color);
        height: var(--menu-icon-size);
        width: var(--menu-icon-size);
        font-size: var(--menu-icon-size);
        margin-left: var(--menu-icon-margin-left);
        :deep(use) {
          filter: drop-shadow(var(--menu-color) 80px 0);
        }
      }
      &:hover {
        background-color: var(--menu-background-color-hover);
        border: var(--menu-border-hover);
        border-left: var(--menu-icon-border-left-hover);
        .button_title {
          color: var(--menu-color-hover);
        }
        .icon_style {
          color: var(--menu-color-hover);
          :deep(use) {
            filter: drop-shadow(var(--menu-color-hover) 80px 0);
          }
        }
      }
      &:focus-visible {
        outline: 0 none;
        outline-offset: 0;
      }
    }
  }
}
</style>
