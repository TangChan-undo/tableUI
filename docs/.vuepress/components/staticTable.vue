<template>
  <el-table v-bind="$attrs" v-on="$listeners" style="width: 100%">
    <el-table-column
      v-for="(column, index) in columns"
      :key="index"
      v-bind="column"
    >
    </el-table-column>
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: "staticTable",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./staticTable.scss";
</style>
