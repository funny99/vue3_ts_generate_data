<template>
  <div>
    <h1>{{ data.project.projectName }}</h1>
    <div v-for="(item, index) in data.project.fields" :key="index" :class="['edit-item', item.type]">
      <span>{{ item.label }}:&nbsp;</span>
      <template v-if="item.type === 'array'">
        <el-collapse>
          <el-collapse-item v-for="(item1, index1) in data.projectValue[item.name]" :key="index1">
            <div v-for="(item2, index2) in item.childFields" :key="index2" class="edit-item">
              <span>{{ item2.label }}:&nbsp;</span>
              <EditItem  
                :item="item2" 
                :projectValue="data.projectValue[item.name][index1][item2.name]" 
              />
            </div>
            <hr/>
          </el-collapse-item>
        </el-collapse>
        <el-button type="primary" @click="addField(item.name, item.childFields)">新增</el-button>
      </template>
      <EditItem v-else :item="item" :projectValue="data.projectValue" />
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
import EditItem from '../components/EditItem.vue';

interface IData {
    project: {[propKey: string]: any};
    projectValue: {[propKey: string]: any};
}

interface Ifield {
  name: string;
  label: string;
  type: string;
  childFields?: Ifield[];
}

interface IObj {
  [propKey: string]: any;
}

export default defineComponent({
  components: {
    EditItem,
  },
  setup() {
    const data: IData = reactive({
      project: dataSource1,
      projectValue: {},
    });

    // 生成初始值
    dataSource1.fields.forEach((item) => {
        data.projectValue[item.name] = item.type === 'array' ? [] : '';
    });

    const downUrl = computed(() => {
        const myBlob = new Blob([JSON.stringify(data.projectValue)], { type: "application/json" });
        return window.URL.createObjectURL(myBlob);
    });

    const addField = (name: string, childFields: any) => {
      const obj: IObj = {};
      childFields.forEach((item: Ifield) => {
        obj[item.name] = '';
      });
      data.projectValue[name].push(obj);
    }

    return {
      data,
      downUrl,
      addField,
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
    .edit-item.array {
      display: block;
    }
</style>
