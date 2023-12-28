# 静态表格

### 示例

<staticTable :data="[{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526',born:'2000-10-10'},{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526',born:'2000-10-10'},{name:'ALICE',age:'18',occupation:'Engineer',idno: '511xxxxxxxxxxx2002',gender: '女',tel: '15185432526',born:'2000-10-10'}]" :columns="[{prop: 'name',label: '姓名',fixed:'left'},{prop: 'age',label: '年龄'},{prop:'occupation',label: '职业'},{prop:'idno',label: '身份证号码',width: 150},{prop: 'gender',label: '性别'},{prop: 'tel',label: '手机号'},{prop: 'born',label: '出生日期'}]" :border="true" :header-cell-style="{ backgroundColor: '#e6e6e6' }">
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
        ],
      };
    },
  };
</script>
```

### Table Attributes

#### 更多配置项&方法请参考 [elementUI 的 Table 表格](https://element.eleme.io/#/zh-CN/component/table)

#### elementUI 中 Table 表格中的所有配置项&方法都适用

注：有关 elementUI 中 Table 表格 的 Table-column Attributes 配置请写在 columns 参数数组中。

| 参数    | 说明                 | 类型           | 可选值          | 默认值 |
| :------ | :------------------- | :------------- | :-------------- | :----- |
| data    | 定义表格的数据数组   | Array          | -               | -      |
| columns | 定义表格的列配置数组 | Array          | -               | -      |
| border  | 是否带有纵向边框     | boolean        | -               | false  |
| fixed   | 列是否固定           | string,boolean | true,left,right | -      |
