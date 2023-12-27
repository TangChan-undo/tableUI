# 静态表格

### 示例

<staticTable :data="[{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526'},{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526'}]" :columns="[{prop: 'name',label: '姓名'},{prop: 'age',label: '年龄'},{prop:'occupation',label: '职业'},{prop:'idno',label: '身份证号码',width: 200},{prop: 'gender',label: '性别'},{prop: 'tel',label: '手机号'}]" :border="true" :header-cell-style="{ backgroundColor: '#e6e6e6' }">
</staticTable>

### 代码

```html
<template>
  <div>
    <static-table
      :data="tableData"
      :columns="tableColumns"
      :border="true"
      :header-cell-style="{ backgroundColor: '#e6e6e6' }"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: 'ALICE',
            age: '18',
            occupation: 'Engineer',
            idno: '511xxxxxxxxxxx2002',
            gender: '女',
            tel: '15185432526',
          },
          {
            name: 'ALICE',
            age: '18',
            occupation: 'Engineer',
            idno: '511xxxxxxxxxxx2002',
            gender: '女',
            tel: '15185432526',
          },
        ],
        tableColumns: [
          { prop: 'name', label: '姓名' },
          { prop: 'age', label: '年龄' },
          { prop: 'occupation', label: '职业' },
          { prop: 'idno', label: '身份证号码', width: 200 },
          { prop: 'gender', label: '性别' },
          { prop: 'tel', label: '手机号' },
        ],
      }
    },
  }
</script>
```

### Table Attributes

| 参数              | 说明                                                                       | 类型                                                  | 可选值 | 默认值 |
| ----------------- | -------------------------------------------------------------------------- | ----------------------------------------------------- | ------ | ------ |
| data              | 定义表格的数据数组                                                         | Array                                                 | -      | -      |
| columns           | 定义表格的列配置数组                                                       | Array                                                 | -      | -      |
| border            | 是否带有纵向边框                                                           | boolean                                               | -      | false  |
| row-class-name    | 行的 className 的回调方法,也可以使用字符串为所有行设置一个固定的 className | Function({row, rowIndex})/String                      | -      | -      |
| header-cell-style | 表头单元格的 style 的回调方法,也可以为一个固定的 Object                    | Function({row, column, rowIndex, columnIndex})/Object | -      | -      |
