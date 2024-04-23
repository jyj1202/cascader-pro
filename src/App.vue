<template>
  <div id="app">
    el-cascader:
    <ElCascaderTest class="mr-10"></ElCascaderTest>
    <br>
    VueLazyCascaderExample:
    <VueLazyCascaderExample></VueLazyCascaderExample>
    <br>

    <div>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%">
      <el-button v-show="!showLazyCascader" @click="showLazyCascader=true">show</el-button>
      <el-button v-show="showLazyCascader" @click="showLazyCascader=false">hide</el-button>
      <VueLazyCascaderExample v-if="showLazyCascader"></VueLazyCascaderExample>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ElCascaderTest from "./components/ElCascaderTest";
import VueLazyCascaderExample from "./components/VueLazyCascaderExample";


export default {
  name: 'App',
  components: {
    ElCascaderTest,
    VueLazyCascaderExample
  },
  data() {
    return {
      dialogVisible: false,
      showLazyCascader: false
    }
  },

}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.mt-10 {
  margin-right: 10px;
}
.mr-10 {
  margin-right: 10px;
}
</style>
