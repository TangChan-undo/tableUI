<template>
  <el-table v-bind="$attrs" v-on="$listeners" style="width: 100%">
    <el-table-column
      v-for="(column, index) in columns"
      :key="index"
      v-bind="column"
    >
      <template v-if="column.url" v-slot="scope">
        <a
          style="color: #409eff; cursor: pointer"
          @click="navigateto(column.url, column.callback, scope.row)"
          >{{ scope.row[column.prop] }}</a
        >
      </template>

      <!-- 插槽支持 -->
      <template v-else-if="column.actions" v-slot="scope">
        <el-button
          type="text"
          v-for="action in column.actions"
          :key="action.text"
          size="small"
          @click="handleAction(action.callback, scope.row)"
        >
          <i v-if="action.icon" :class="action.icon"></i>
          {{ action.text }}</el-button
        >
      </template>
    </el-table-column>
    <!-- 默认插槽 -->
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: "InteractiveTable",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleAction(callbackName, row) {
      this.$emit(callbackName, row);
    },
    navigateto(url, callbackName, row) {
      this.$emit(callbackName, row);
      this.$router.push({ path: url, query: { row } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./InteractiveTable.scss";
</style>
