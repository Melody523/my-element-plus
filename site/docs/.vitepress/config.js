import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/my-element-plus/" : "/",
  head: [
    [
      "script", // js 文件
      { src: "https://at.alicdn.com/t/c/font_3986707_rpz0a4tq9s.js?spm=a313x.7781069.1998910419.53&file=font_3986707_rpz0a4tq9s.js" },
    ],
  ],
  themeConfig: {
    siteTitle: "my-element-plus",
    nav: [
      { text: "指南", link: "/guild/introduce" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Melody523/my-element-plus" },
    ],
    
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "介绍",
              link: "/guild/introduce",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button 按钮",
              link: "/components/button/",
            },
            {
              text: "MenuButton 下拉菜单按钮",
              link: "/components/menuButton/",
            },
            {
              text: "Icon 图标",
              link: "/components/icon/",
            },
            {
              text: "DatePicker 日期选择器",
              link: "/components/datePicker/",
            },
            {
              text: "DigitalRange 数字范围",
              link: "/components/digitalRange/",
            },
            {
              text: "SearchNumberList 多单号输入",
              link: "/components/searchNumberList/",
            },
            {
              text: "BasicSelectModal 弹窗选择器",
              link: "/components/basicSelectModal/",
            },
            {
              text: "SearchSelect 模糊下拉弹窗选择器",
              link: "/components/searchSelect/",
            },
          ],
        },
        {
          text: "Form组件",
          items: [
            {
              text: "RCForm 表单组件",
              link: "/components/rcForm/",
            },
            {
              text: "SearchForm 搜索表单组件",
              link: "/components/searchForm/",
            },
          ],
        },
      ],
    },
  },
  markdown: {
    // headers: {
    //   level: [0, 0],
    // },
    // light: #f9fafb, dark: --vp-code-block-bg
    // theme: { light: 'github-light', dark: 'github-dark' },
    config(md) {
      md.use(demoBlockPlugin, {
        customClass: "demoblock-custom",
        scriptImports: [
          "import * as ElementPlus from 'element-plus'",
          "import { filterCheckTableList } from '../../public/utils/tuils.ts'",
        ],
        scriptReplaces: [
          {
            searchValue:
              /const ({ defineComponent as _defineComponent }) = Vue/g,
            replaceValue: "const { defineComponent: _defineComponent } = Vue",
          },
          {
            searchValue: /import ({.*}) from 'element-plus'/g,
            replaceValue: (s, s1) => `const ${s1} = ElementPlus`,
          },
        ],
      });
    },
    lineNumbers: true,
  },
});
