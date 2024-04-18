# Vue Lazy Cascader

Vue Lazy Cascader 是一个vue2级联选择器组件，基于 element-ui 的级联组件。它保留了 el-cascader 的完整功能，并增加了滚动加载和远程搜索功能。

## 安装

您可以通过 npm、yarn 或 pnpm 来安装 Vue Lazy Cascader。

### npm

```bash
npm install vue-lazy-cascader --save
```

### yarn

```bash
yarn add vue-lazy-cascader
```

### pnpm

```bash
pnpm install vue-lazy-cascader --save
```

## Tip
由于该组件并未打包element-ui相关组件，所以使用时，必须已经安装element-ui。

## 使用方法

- [es模块示例](./src/components/VueLazyCascaderExample.vue)

  ```javascript
  import VueLazyCascader from "vue-lazy-cascader";
  ```

- [直接script引入示例](./example/index.html)
