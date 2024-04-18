# Vue Lazy Cascader

Vue Lazy Cascader 是一个vue2级联选择器组件，基于 element-ui 的级联组件。它保留了 el-cascader 的完整功能，并增加了滚动加载和远程搜索功能。

## Install

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

## Usage

- [es模块示例](./src/components/VueLazyCascaderExample.vue)

  ```javascript
  import VueLazyCascader from "vue-lazy-cascader";
  ```

- [直接script引入示例](./example/index.html)

## Tip
- 由于该组件并未打包element-ui相关组件，所以使用时，必须已经安装element-ui。
- 级联value必须唯一，否则会出错。例如相同value的子节点无法插入到不同的父节点下（待修复）
- 是否是最后一页要判断准确，不能单纯用已加载和接口返回相加数量 == total进行判断，因为接口返回的可能已经加载过了。[详情请看代码（搜索时候会把搜索结果append到节点store中）](./src/components/cascader/src/cascader.vue)
