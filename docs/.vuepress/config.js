// .vuepress/config.js
module.exports = {
  title: "Table-UI",
  base: "/tableUI/",
  themeConfig: {
    nav: [
      {
        text: "HOME",
        link: "/",
      },
      {
        text: "GitHub",
        link: "https://github.com/TangChan-undo/tableUI",
      },
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/tc_table_ui",
      },
    ],
    sidebar: [
      "/",
      "/componentDocs/staticTable",
      "/componentDocs/dynamicTable",
      "/componentDocs/InteractiveTable",
    ],
  },
};
