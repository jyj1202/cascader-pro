<template>
  <VueLazyCascader
    v-model="selectedArr"
    filterable
    :props="props"
    :show-all-levels="false"
    :options="options"
    remote
    @menu-scroll-bottom="handleScrollBottom"
    @suggestion-scroll-bottom="handleSuggestionScrollBottom"
  >

  </VueLazyCascader>
</template>

<script>
import { getData, searchData, rootData } from "./data";
import VueLazyCascader from "./cascader";
// import VueLazyCascader from "../../lib/vue-lazy-cascader.umd.js";
// import VueLazyCascader from "vue-lazy-cascader";

// 如果传入了options并且有值，那么不会再触发level1的懒加载
const options = Array.from({ length: 10 }, (item, index) => ({
  label: `远程选项${index + 1}`,
  value: index + 1,
  children: Array.from({ length: 15 }, (subItem, subIndex) => ({
      label: `选项${index + 1}-${subIndex + 1}`,
      value:   `${(index + 1)}-${subIndex + 1}`,
      leaf: true,
      parent: index + 1,
      disabled: subIndex == 14
  })),
  leaf: false,
  total: 30,
}))
export default {
  components: {
    VueLazyCascader,
  },
  data() {
    return {
      selectedArr: ['1-1', '1-15'],
      options: options,
      props: {
        lazy: true,
        multiple: true,
        emitPath: false,
        lazyLoad (node, resolve) {
          const { level, root, isLeaf, data: nodeData } = node;
          if (isLeaf) return resolve([])
          setTimeout(() => {
            if (root) {
              console.log('lazyload root');
              resolve(rootData)
            } else {
              console.log('lazyload' , level);
              const {value: parentId} = nodeData
              nodeData.currentPage = 1
              nodeData.isEnd = false
              const {data: children, total} = getData(parentId, nodeData.currentPage, 10)
              if (node.children.length + children.length < total) {
                nodeData.isEnd = false
              } else {
                nodeData.isEnd = true
              }
              resolve(children)
            }
          }, 200);
        },
        remoteMethod: this.remoteMethod
      },
      searchCurrentPage: 0
    }
  },
  methods: {
    remoteMethod(query, resolve) {
      if (query !== '') {
        this.searchCurrentPage = 1
        // this.loading = true;
        setTimeout(() => {
          // this.loading = false;
          const res = searchData(query, this.searchCurrentPage, 10)
          resolve(res.data)
        }, 200);
      }
    },

    handleScrollBottom(parentNode, resolve) {
      if (parentNode) {
        const {data: nodeData} = parentNode
        const {isEnd, value, total} = nodeData
        // if (isEnd) return
        nodeData.currentPage = nodeData.currentPage || 0
        nodeData.currentPage++
        setTimeout(() => {
          const {data: children, total} = getData(value, parentNode.data.currentPage, 5)
          nodeData.total = total
          if (parentNode.children.length + children.length < total) {
            nodeData.isEnd = false
          } else {
            nodeData.isEnd = true
          }
          resolve(children)
        }, 200);
        
      }
    },

    handleSuggestionScrollBottom(query, resolve) {
      if (query !== '') {
        this.searchCurrentPage++
        setTimeout(() => {
          const {data, total} = searchData(query, this.searchCurrentPage, 10)
          resolve(data)
        }, 200);
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>