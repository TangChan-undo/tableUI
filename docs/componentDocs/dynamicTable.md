# 动态表格

### 示例

<dynamicTable :data="[{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526',born:'2000-10-10'},{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526',born:'2000-10-10'},{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526',born:'2000-10-10'}]" :columns="[{prop: 'name',label: '姓名'},{prop: 'age',label: '年龄'},{prop:'occupation',label: '职业'},{prop:'idno',label: '身份证号码'},{prop: 'gender',label: '性别'},{prop: 'tel',label: '手机号'},{prop: 'born',label: '出生日期'},{prop:'actions',label:'操作',fixed:'right',width:150,actions:[{text:'编辑',icon:'el-icon-edit',callback:'handleEdit'},{text:'删除',icon:'el-icon-delete',callback:'handleDelete'}]}]" :border="true" :header-cell-style="{ backgroundColor: '#e6e6e6' }" :row-class-name="getRowClassName" :span-method="getSpanMethod" >
</dynamicTable>

### 代码

```html
<template>
  <div>
    <dynamic-table
      :data="tableData"
      :columns="tableColumns"
      :border="true"
      :height="'300px'"
      :row-class-name="getRowClassName"
      :span-method="getSpanMethod"
      :header-cell-style="{ backgroundColor: '#e6e6e6' }"
      :row-style="{ height: '0' }"
      :cell-style="{ padding: '10px' }"
      @handleEdit="onEdit"
      @handleDelete="onDelete"
    ></dynamic-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: "ALICE",
            age: "18",
            occupation: "Engineer",
            idno: "511xxxxxxxxxxx2002",
            gender: "女",
            tel: "15185432526",
          },
          {
            name: "ALICE",
            age: "18",
            occupation: "Engineer",
            idno: "511xxxxxxxxxxx2002",
            gender: "女",
            tel: "15185432526",
          },
          {
            name: "ALICE",
            age: "18",
            occupation: "Engineer",
            idno: "511xxxxxxxxxxx2002",
            gender: "女",
            tel: "15185432526",
          },
        ],
        tableColumns: [
          { prop: "name", label: "姓名", fixed: "right" },
          { prop: "age", label: "年龄" },
          { prop: "occupation", label: "职业" },
          { prop: "idno", label: "身份证号码", width: 200 },
          { prop: "gender", label: "性别" },
          { prop: "tel", label: "手机号" },
          { prop: "born", label: "出生日期" },
          {
            prop: "actions",
            label: "操作",
            fixed: "right",
            actions: [
              {
                text: "编辑",
                icon: "el-icon-edit",
                callback: "handleEdit",
              },
              {
                text: "删除",
                icon: "el-icon-delete",
                callback: "handleDelete",
              },
            ],
          },
        ],
      };
    },
    methods: {
      getRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 == 0) {
          return "odd-row-class";
        } else {
          return "even-row-class";
        }
      },
      selectionChange(selection) {
        console.log("selection", selection);
      },

      getSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 1 && rowIndex === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else if (columnIndex === 1 && rowIndex === 1) {
          return {
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
      onEdit(row) {
        console.log(row);
      },
      onDelete(row) {
        console.log(row);
      },
    },
  };
</script>
```

### 配置项&方法

#### 更多配置项&方法请参考 [elementUI 的 Table 表格](https://element.eleme.io/#/zh-CN/component/table)

#### elementUI 中 Table 表格中的所有配置项&方法都适用

### Table Attributes

注：有关 elementUI 中 Table 表格 的 Table-column Attributes 配置请写在 columns 参数数组中。

| 参数    | 说明                 | 类型           | 可选值          | 默认值 |
| :------ | :------------------- | :------------- | :-------------- | :----- |
| data    | 定义表格的数据数组   | Array          | -               | -      |
| columns | 定义表格的列配置数组 | Array          | -               | -      |
| border  | 是否带有纵向边框     | boolean        | -               | false  |
| fixed   | 列是否固定           | string,boolean | true,left,right | -      |

---

### Table Attributes

#### 更多配置项&方法请参考 [elementUI 的 Table 表格](https://element.eleme.io/#/zh-CN/component/table)

注：有关 Table-column 的自定义事件请写在 columns 参数数组中。
|事件名|说明|参数|
|:---|:---|:---|
|select|当用户手动勾选数据行的 Checkbox 时触发的事件|selection, row|
|selection-change|当选择项发生变化时会触发该事件|selection|
| row-class-name | 行的 className 的回调方法,也可以使用字符串为所有行设置一个固定的 className | Function({row, rowIndex})/String | - | - |
| header-cell-style | 表头单元格的 style 的回调方法,也可以为一个固定的 Object | Function({row, column, rowIndex, columnIndex})/Object | - | - |
|handleEdit|自定义的事件（写在传入 column 参数的数组中）|row(表格中每一行的数据)|
|handleDelete|自定义的事件（写在传入 column 参数的数组中）|row(表格中每一行的数据)|
