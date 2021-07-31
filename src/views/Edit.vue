<template>
  <div>
    <h1>{{ data.project.projectName }}</h1>
    <div v-for="(item, index) in data.project.fields" :key="index" class="edit-item">
      <span>{{ item.label }}:&nbsp;</span>
      <div v-if="item.type === 'date'">
        <el-date-picker
          v-model="data.projectValue[item.name]"
          type="datetime"
          placeholder="选择日期时间"
          :default-time="new Date()"
        >
        </el-date-picker>
      </div>
      <div v-else-if="item.type === 'text'">
        <el-input
          v-model="data.projectValue[item.name]"
          placeholder="请输入"
        ></el-input>
      </div>
      <div v-else-if="item.type === 'textarea'">
        <el-input
          type="textarea"
          placeholder="请输入"
          v-model="data.projectValue[item.name]"
        >
        </el-input>
      </div>
    </div>
    <br/>
    <a 
        id="Download" 
        download="download.json" 
        :href="downUrl" 
        target="_blank"
    >
        下载生成的数据文件
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import dataSource1 from "@/data/dataSource1";

interface IData {
    project: {[propKey: string]: any};
    projectValue: {[propKey: string]: any};
}

export default defineComponent({
  setup() {
    const data: IData = reactive({
      project: dataSource1,
      projectValue: {},
    });

    // 生成初始值
    dataSource1.fields.forEach((item: {name: string}) => {
        data.projectValue[item.name] = '';
    });

    const downUrl = computed(() => {
        const myBlob = new Blob([JSON.stringify(data.projectValue)], { type: "application/json" });
        return window.URL.createObjectURL(myBlob);
    });

    return {
      data,
      downUrl,
    };
  },
});
</script>

<style scoped>
    .edit-item {
        display: flex;
        margin-bottom: 10px;
    }
    .edit-item > span {
        flex: 2;
    }
    .edit-item > div {
        flex: 8;
    }
</style>
