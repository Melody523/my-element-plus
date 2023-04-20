<template>
  <div
    :class="`button_style_default ${type}_style  ${size}_button ${model}_model  ${
      isHover ? 'is_hover' : ''
    } button_style`"
  >
    <el-button
      @click="onClick"
      v-bind="{ disabled, loading }"
    >
      <!-- icon -->
      <i v-if="iconType === 'svg' && icon && !loading" class="button_icon">
        <svg-icon
					color="icon_style"
          :iconName="icon"
					className="icon_style"
        ></svg-icon>
      </i>
      <i v-else-if="iconType === 'slot'" class="button_icon">
        <slot name="icon" />
      </i>
      <!-- contant -->
      <span class="button_title" v-if="slotDefault">
        <slot name="default" />
      </span>
    </el-button>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, defineComponent, useSlots } from "vue";
export default defineComponent({
  name: "Button",
  emits: ["click"],
  props: {
    /**
     * 按钮类型
     * default | danger | primary | plain | text |warning
     */
    type: {
      type: String,
      default: "default",
    },
    /**
     * 按钮默认size
     * small | large,
     * hegiht:24px | hegiht:32px
     */
    size: {
      type: String,
      default: "large",
    },
    /**
     * 按钮模式
     * normal | icon
     */
    model: {
      type: String,
      default: "normal",
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * loading
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * icon名称 当前变量仅支持fa和svg-icon
     */
    icon: {
      type: String,
      default: null,
    },
    /**
     * 引用icon的类型 暂时支持svg(svg-icon)两种方式
     */
    iconType: {
      type: String,
      default: "svg",
    },
    /**
     * 手动设置按钮选中状态(实际上就是把hover颜色改为常驻颜色)
     */
    isHover: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    let state = reactive<any>({
      slotDefault: !!useSlots().default, // 判断是否传入了 default slot
    });

    const onClick = () => {
      emit("click");
    };
    return {
      ...toRefs(state),
      ...toRefs(props),
      state,
      onClick,
    };
  },
});
</script>

<style scoped lang="less">
// button一些默认属性
.button_style_default {
  --button-width: auto;
  --button-disabled-color: var(--button-color);
}

// small大小的按钮
.small_button {
  --button-height: 24px;
  --button-font-size: 12px;
  --button-icon-size: 12px;
  --button-title-height: 20px;
  --button-padding: 0px 8px;
}

// large大小的按钮
.large_button {
  --button-height: 32px;
  --button-font-size: 14px;
  --button-icon-size: 16px;
  --button-title-height: 22px;
  --button-padding: 0px 12px;
}

// default类型按钮
.default_style {
  --button-background-color: #fff;
  --button-hover-background-color: #eaf3ff;
  --button-color: #256bff;
  --button-hover-color: #256bff;
  --button-border: 1px solid #256bff;
  --button-hover-border: 1px solid #256bff;
}

.danger_style {
  --button-background-color: #ff1a3b;
  --button-hover-background-color: #b11336;
  --button-color: #fff;
  --button-hover-color: #fff;
  --button-border: none;
  --button-hover-border: none;
}
.warning_style {
  --button-background-color: #e6a23c;
  --button-hover-background-color: #a77730;
  --button-color: #fff;
  --button-hover-color: #fff;
  --button-border: none;
  --button-hover-border: none;
}

// 次一级类型按钮
.primary_style {
  --button-background-color: #256bff;
  --button-hover-background-color: #0b4edb;
  --button-color: #fff;
  --button-hover-color: #fff;
  --button-border: none;
  --button-hover-border: none;
}

// 再次一级类型按钮
.plain_style {
  --button-background-color: #fff;
  --button-hover-background-color: #fff;
  --button-color: #333333;
  --button-hover-color: #256bff;
  --button-border: 1px solid #cccccc;
  --button-hover-border: 1px solid #256bff;
}

.text_style {
  --button-background-color: rgba(0, 0, 0, 0);
  --button-hover-background-color: rgba(0, 0, 0, 0);
  --button-color: #256bff;
  --button-hover-color: #0b4edb;
  --button-border: none;
  --button-hover-border: none;
  --button-disabled-color: #999999;
}

// icon模式按钮
.icon_model {
  --button-padding: 0px;
  --button-width: var(--button-height);
  --button-font-size: calc(var(--button-height) - 8px);
  --button-icon-size: calc(var(--button-height) - 8px);
  --button-title-height: calc(var(--button-height) - 8px);
}

.is_hover {
  --button-background-color: var(--button-hover-background-color);
  --button-color: var(--button-hover-color);
  --button-border: var(--button-hover-border);
}

// 总体按钮样式
.button_style {
  .el-button {
    width: var(--button-width);
    height: var(--button-height);
    background: var(--button-background-color); //
    border-radius: 2px;
    box-sizing: border-box;
    border: var(--button-border);
    padding: var(--button-padding);
    .button_title {
      height: var(--button-title-height);
      font-size: var(--button-font-size);
      font-weight: 400;
      color: var(--button-color);
      line-height: var(--button-title-height);
    }
		.button_icon {
			color: var(--button-color);
			.icon_style {
				:deep(use) {
					filter: drop-shadow(var(--button-color) 80px 0);
				}
			}
		}
    &:hover {
      width: var(--button-width);
      height: var(--button-height);
      background: var(--button-hover-background-color); //
      border-radius: 2px;
      box-sizing: border-box;
      border: var(--button-hover-border);
      padding: var(--button-padding);
      .button_title {
        height: var(--button-title-height);
        font-size: var(--button-font-size);
        font-weight: 400;
        color: var(--button-hover-color);
        line-height: var(--button-title-height);
      }
      .button_icon {
        color: var(--button-hover-color);
				.icon_style {
					:deep(use) {
						filter: drop-shadow(var(--button-hover-color) 80px 0);
					}
				}
      }
    }
		&:focus-visible {
      outline: 0 none;
      outline-offset: 0;
    }
    [class*="button_icon"] + .button_title {
      margin-left: 4px;
    }
  }
  .is-disabled {
    opacity: 0.5;
    height: var(--button-height);
    background: var(--button-background-color);
    border-radius: 2px;
    box-sizing: border-box;
    border: var(--button-border);
    padding: var(--button-padding);
    .button_title {
      color: var(--button-disabled-color);
    }
    &:hover {
      opacity: 0.5;
      height: var(--button-height);
      background: var(--button-background-color);
      border-radius: 2px;
      box-sizing: border-box;
      border: var(--button-border);
      padding: var(--button-padding);
      .button_title {
        color: var(--button-disabled-color);
      }
			.button_icon {
        color: var(--button-disabled-color);
				.icon_style {
					:deep(use) {
						filter: drop-shadow(var(--button-disabled-color) 80px 0);
					}
				}
      }
    }
    .svg-icon {
      cursor: not-allowed;
    }
  }
  :deep(.is-loading) {
    // el-button loading 的时候 会有一个before元素遮盖按钮，ui设计并没有。移除before元素。
    // 并且loading状态是不支持点击事件的
    &:before {
      content: none;
    }
  }
  // 控制loading状态下的el icon
  :deep(.el-icon.is-loading) {
    color: var(--button-color);
    height: var(--button-icon-size);
    width: var(--button-icon-size);
    svg {
      width: var(--button-icon-size);
      height: var(--button-icon-size);
    }
  }
  // fa icon
  .button_icon {
    color: var(--button-color);
    height: var(--button-icon-size);
    width: var(--button-icon-size);
    font-size: var(--button-icon-size);
  }
}
</style>
