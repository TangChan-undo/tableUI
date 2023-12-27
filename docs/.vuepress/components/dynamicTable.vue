<template>
  <section class="dynamicTable">
    <el-table v-bind="$attrs" v-on="$listeners" style="width: 100%">
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        v-bind="column"
      >
        <!-- 插槽支持 -->
        <template v-if="column.actions" v-slot="scope">
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
      <slot></slot>
      <!-- 默认插槽 -->
    </el-table>
  </section>
</template>

<script>
export default {
  name: "dynamicTable",
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
  },
};
</script>

<style lang="scss" scoped>
@import "./dynamicTable.scss";
</style>
