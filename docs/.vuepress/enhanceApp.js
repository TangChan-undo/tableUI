import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default ({ Vue }) => {
  Vue.use(ElementUI);
  Vue.mixin({
    methods: {
      getRowClassName({ row, rowIndex }) {
        // 根据行或者行索引返回类名
        if (rowIndex % 2 == 0) {
          return "odd-row-class";
        } else {
          return "even-row-class";
        }
      },
      getSpanMethod({ rowIndex, columnIndex }) {
        // console.log("rowIndex", rowIndex, columnIndex);
        // 是否是第二列的第一行
        if (columnIndex === 1 && rowIndex === 0) {
          return {
            // 合并两行
            rowspan: 2,
            colspan: 1,
          };
          // 是否第二列的第二行
        } else if (columnIndex === 1 && rowIndex === 1) {
          return {
            // 不渲染
            rowspan: 0,
            colspan: 0,
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1,
          };
        }
      },
    },
  });
};
