# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.18](https://github.com/jyj1202/vue-lazy-cascader/compare/v0.1.17...v0.1.18) (2024-04-23)


### Bug Fixes

* 修复远程搜索无匹配数据时显示错误 ([d109596](https://github.com/jyj1202/vue-lazy-cascader/commit/d109596b6fa8299bdd3c0419246682f2e4d787fd))

### 0.1.17 (2024-04-20)


### Bug Fixes

*  修改total使用条件，只要用户传了，那么优先使用用户传入的total ([d90c930](https://github.com/jyj1202/vue-lazy-cascader/commit/d90c9308ed22599bb5a37f00c5f287eb16a5f7a8))
* 删除无用代码; 修改devDependencies、dependencies ([2d762ff](https://github.com/jyj1202/vue-lazy-cascader/commit/2d762ff2c8ec018ad90dc928313acaafd5068f55))
* 修复远程搜索后动态加载，选中值被清空问题; 修改远程搜索处理逻辑 ([10262ea](https://github.com/jyj1202/vue-lazy-cascader/commit/10262ea8491d0bf54b70fd9c7f1c868265d1f14a))
* 修复远程搜索结果都是已经存在的，导致无法继续触发触底错误 ([e49d440](https://github.com/jyj1202/vue-lazy-cascader/commit/e49d440b6639649739eccefa39c02ab2fe67a417))
* 修复远程搜索选中suggestion后无法继续滚动加载 ([f57771b](https://github.com/jyj1202/vue-lazy-cascader/commit/f57771b0b44faa84ccca6c8afc397072c5bb666b))
* 修复远程搜索append数据时，suggestion list滚动条样式bug ([43c738b](https://github.com/jyj1202/vue-lazy-cascader/commit/43c738be2b1489e9f54ec318afecd861c2c0aad4))
* 修复直接远程搜索，未加载叶子节点，叶子节点选中需点击两次 ([bf1c9a5](https://github.com/jyj1202/vue-lazy-cascader/commit/bf1c9a59dbc81e1fece2185b90b031a52681a0b7))
* 修复delete tag 无法同步父节点状态错误; 修复cascader pro滚动加载的使用错误; 勾选1级加载后，1级节点状态没变 ([39cda1f](https://github.com/jyj1202/vue-lazy-cascader/commit/39cda1f5d00b31d2e4888b2bea8edf67364bc2bb))
* 修复menu节点都是已经存在的情况，导致无法触发触底 ([23719d8](https://github.com/jyj1202/vue-lazy-cascader/commit/23719d8b3548407d976e33b336c31e6e76e5cb3e))
* 修复v-model失效 ([336ff07](https://github.com/jyj1202/vue-lazy-cascader/commit/336ff07a20f6a0fbf7cfcc2cafe60c9f2b5d5a9d))
* 远程搜索后，将搜索的数据集去重后插入store；滚动加载同理 ([b627f26](https://github.com/jyj1202/vue-lazy-cascader/commit/b627f262fe74db412c7bb55f260ad83ca0236fce))
* append dataLis 逻辑改为 没加载的节点直接append，已经加载的节点替换 ([a981dfb](https://github.com/jyj1202/vue-lazy-cascader/commit/a981dfbd6d5095167c739b4ff39445bcd63323cd))
* 修复已传入节点或远程搜索append节点后，导致直接展开选中路径，无法触发滚动加载 ([5632fa6](https://github.com/jyj1202/vue-lazy-cascader/commit/5632fa647ffa4e60ddf3974c0dddff98bb088d34))
* menu修复滚动加载没有同步选中tag ([53d5a41](https://github.com/jyj1202/vue-lazy-cascader/commit/53d5a410d247c49c4ba52d54c07ca5425fae6de5))
