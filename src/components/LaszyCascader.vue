<template>
  <LazyCascader
      v-model="value2"
      filterable
      :props="props2"
    ></LazyCascader>
</template>

<script>
import LazyCascader from "lazy-cascader";

export default {
  components: {
    LazyCascader,
  },
  data() {
    return {
      value2: [],
      props2: {
        multiple: true,
        checkStrictly: false,
        value: "id",
        label: "name",
        leaf: "leaf",
        lazyLoad: this.lazyLoad,
        lazySearch: this.lazySearch
      },
      current: [],
      options: [
        {
          id: 1,
          name: "服装",
          children: [
            {
              id: 3,
              name: "男装",
              children: [
                {
                  id: 7,
                  name: "T恤"
                }
              ]
            },
            {
              id: 4,
              name: "女装"
            }
          ]
        },
        {
          id: 2,
          name: "数码",
          children: [
            {
              id: 5,
              name: "手机"
            },
            {
              id: 6,
              name: "电脑"
            }
          ]
        }
      ],
    }
  },
  methods: {
    //加载级联的方法
    lazyLoad(nodeValue, resolve) {
      setTimeout(() => {
        resolve(this.getCateList(nodeValue));
      }, 200);
    },
    lazySearch(queryString, callback) {
      setTimeout(() => {
        callback([
          {
            id: [1, 3, 7],
            name: ["服装", "男装", "T恤"]
          },
          {
            id: [1, 4],
            name: ["服装", "女装"]
          },
          {
            id: [2, 5],
            name: ["数码", "手机"]
          }
        ]);
      }, 200);
    },
    getCateList(parent) {
      if (parent == 0) {
        return this.options.map(item => {
          let obj = {
            id: item.id,
            name: item.name,
            leaf: true
          };
          if (item.children && item.children.length > 0) {
            obj.leaf = false;
          }
          return obj;
        });
      } else {
        this.current = [];
        this.findCate(parent, this.options);
        return this.current.map(item => {
          let obj = {
            id: item.id,
            name: item.name,
            leaf: true
          };
          if (item.children && item.children.length > 0) {
            obj.leaf = false;
          }
          return obj;
        });
      }
    },
    findCate(parent, children) {
      for (let i = 0; i < children.length; i++) {
        if (parent == children[i].id) {
          this.current = children[i].children;
        } else {
          if (children[i].children) {
            this.findCate(parent, children[i].children);
          }
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>