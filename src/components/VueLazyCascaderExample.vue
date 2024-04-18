<template>
  <VueLazyCascader
    v-model="selectedArr"
    filterable
    :props="props"
    :show-all-levels="false"
    remote
    @menu-scroll-bottom="handleScrollBottom"
    @suggestion-scroll-bottom="handleSuggestionScrollBottom"
  >

  </VueLazyCascader>
</template>

<script>
import { getData, searchData, rootData } from "./data";
import VueLazyCascader from "../../lib/vue-lazy-cascader.umd.js";
// import VueLazyCascader from "vue-lazy-cascader";

export default {
  components: {
    VueLazyCascader,
  },
  data() {
    return {
      selectedArr: ['1-1', '1-2'],
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
        console.log(parentNode, 'handleScrollBottom parentNode');
        const {data: nodeData} = parentNode
        const {isEnd, value, total} = nodeData
        // if (isEnd) return
        nodeData.currentPage++
        setTimeout(() => {
          const {data: children, total} = getData(value, parentNode.data.currentPage, 10)
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