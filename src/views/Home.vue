<template>
  <div class="home">
    <h1>项目列表</h1>
    <el-table :data="data.list" border style="width: 100%">
      <el-table-column prop="projectName" label="项目名称">
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="text" size="small" @click="$router.push('/edit')">编辑</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import dataSource1 from "@/data/dataSource1";

export default defineComponent({
  setup() {
    const data = reactive({list: [dataSource1]});
    return {
      data
    };
  },
});
</script>
