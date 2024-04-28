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

## Changelog
[更新日志](./CHANGELOG.md)

## Usage

- es模块示例
  - [代码](./src/components/VueLazyCascaderExample.vue)

  - [demo](https://jyj1202.github.io/vue-lazy-cascader/)

  ```javascript
  import VueLazyCascader from "vue-lazy-cascader";
  ```


- 直接script引入示例
  - [代码](./public/vue-lazy-cascader.html)

  - [demo](https://jyj1202.github.io/vue-lazy-cascader/vue-lazy-cascader.html)

## description

### Added Prop

| 属性名            | 类型      | 描述               |
|----------------|-----------|--------------------|
| remote         | boolean   | 是否开启远程搜索     |
| props.remoteMethod | (query: string, resolve: (any[]) => void)  | 远程搜索方法，回调接收搜索的数据作为参数，会将未加载的数据插入到级联的数据store中      |
| props.total | string  | 指定选项子节点总数为选项对象的某个属性值，默认'total'     |


### Added Events

| event name       |      callback parameter      | description                    |
|------------------|------------------------------|--------------------------------|
| menu-scroll-bottom     | (parentNode: Node, resolve: (any[]) => void) | 当菜单滚动到底部时触发，回调接收滚动加载的新数据作为参数，会将传入的未加载的数据插入到级联的数据store中。                                    |
| suggestion-scroll-bottom | (query: string, resolve: (any[]) => void) | 当搜索列表滚动到底部时触发，回调接收搜索的数据作为参数，会将未加载的数据插入到级联的数据store中。                                  |


## Tip
- 该组件可以脱离element-ui使用（已打包了所需的element-ui代码）; 如果您的项目使用了类似于webpack的模块化构建工具，那么引入common.js.......
- 级联value必须唯一，否则会出错。例如相同value的子节点无法插入到不同的父节点下（待修复）
- 是否是最后一页要判断准确，不能单纯用已加载和接口返回相加数量 == total进行判断，因为接口返回的可能已经加载过了。[详情请看代码（搜索时候会把搜索结果append到节点store中）](./src/components/cascader/src/cascader.vue)
- pop的层级如果不对，可以将appendToBody设置为false
