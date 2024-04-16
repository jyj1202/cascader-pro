<template>
  <div id="app">
    <ElCascaderTest class="mr-10"></ElCascaderTest>
    pro
    <CasaderPro class="mr-10"></CasaderPro>

    <el-select v-model="value1" multiple filterable placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import ElCascaderTest from "./components/ElCascaderTest";
import CasaderPro from "./components/CasaderPro";


export default {
  name: 'App',
  components: {
    ElCascaderTest,
    CasaderPro
  },
  data() {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mr-10 {
  margin-right: 10px;
}
</style>
