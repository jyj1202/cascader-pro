<template>
  <div id="app">
    el-cascader:
    <ElCascaderTest class="mr-10"></ElCascaderTest>
    VueLazyCascaderExample:
    <VueLazyCascaderExample></VueLazyCascaderExample>
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
