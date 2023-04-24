import { defineComponent as r } from "vue";
const s = r({
  name: "ThePagination",
  emits: ["custCurrentChange", "custSizeChange"],
  props: {
    pageSizeArr: {
      type: Array,
      default: () => [5, 10, 15, 20, 50, 100]
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 15
    },
    total: {
      type: Number,
      default: 0
    },
    pagerCount: {
      type: Number,
      default: 5
    }
  },
  setup(a, { emit: t }) {
    return {
      sizeChange: (e) => {
        t("custSizeChange", e);
      },
      currentChange: (e) => {
        t("custCurrentChange", e);
      }
    };
  }
});
export {
  s as default
};
