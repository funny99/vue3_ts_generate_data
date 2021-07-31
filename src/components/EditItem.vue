
<template>
  <div>
      <div v-if="item.type === 'date'">
        <el-date-picker
          type="datetime"
          placeholder="选择日期时间"
          :default-time="new Date()"
        >
        </el-date-picker>
      </div>
      <div v-else-if="item.type === 'text'">
        <el-input
          placeholder="请输入"
        ></el-input>
      </div>
      <div v-else-if="item.type === 'textarea'">
        <el-input
          type="textarea"
          placeholder="请输入"
        >
        </el-input>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Ifield, IObj } from '../views/Edit.d';

export default defineComponent({
  props: {
    item: Object as PropType<Ifield>,
    projectValue: Object as PropType<IObj>,
  },
  setup(props) {
    console.log(props);
  },
});
</script>

<style scoped>
</style>
