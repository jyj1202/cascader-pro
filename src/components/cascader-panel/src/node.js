import { isEqual, capitalize } from 'element-ui/src/utils/util';
import { isDef } from 'element-ui/src/utils/shared';

let uid = 0;

export default class Node {

  constructor(data, config, parentNode) {
    this.data = data;
    this.config = config;
    this.parent = parentNode || null;
    this.level = !this.parent ? 1 : this.parent.level + 1;
    this.uid = uid++;

    this.initState();
    this.initChildren();
  }

  initState() {
    const { value: valueKey, label: labelKey, total: totalKey } = this.config;

    this.value = this.data[valueKey];
    this.label = this.data[labelKey];
    this.total = this.data[totalKey]; // add by jyj
    this.pathNodes = this.calculatePathNodes();
    this.path = this.pathNodes.map(node => node.value);
    this.pathLabels = this.pathNodes.map(node => node.label);

    this.checked = this.data.checked || false

    // lazy load
    this.loading = false;
    this.loaded = false;
  }

  initChildren() {
    const { config } = this;
    const childrenKey = config.children;
    const childrenData = this.data[childrenKey];
    this.hasChildren = Array.isArray(childrenData);
    this.children = (childrenData || []).map(child => new Node(child, config, this));
  }

  get isDisabled() {
    const { data, parent, config } = this;
    const disabledKey = config.disabled;
    const { checkStrictly } = config;
    return data[disabledKey] ||
      !checkStrictly && parent && parent.isDisabled;
  }

  get isLeaf() {
    const { data, loaded, hasChildren, children } = this;
    const { lazy, leaf: leafKey } = this.config;
    if (lazy) {
      const isLeaf = isDef(data[leafKey])
        ? data[leafKey]
        : (loaded ? !children.length : false);
      this.hasChildren = !isLeaf;
      return isLeaf;
    }
    return !hasChildren;
  }

  calculatePathNodes() {
    const nodes = [this];
    let parent = this.parent;

    while (parent) {
      nodes.unshift(parent);
      parent = parent.parent;
    }

    return nodes;
  }

  getPath() {
    return this.path;
  }

  getValue() {
    return this.value;
  }

  getValueByOption() {
    return this.config.emitPath
      ? this.getPath()
      : this.getValue();
  }

  getText(allLevels, separator) {
    return allLevels ? this.pathLabels.join(separator) : this.label;
  }

  isSameNode(checkedValue) {
    const value = this.getValueByOption();
    return this.config.multiple && Array.isArray(checkedValue)
      ? checkedValue.some(val => isEqual(val, value))
      : isEqual(checkedValue, value);
  }

  broadcast(event, ...args) {
    const handlerName = `onParent${capitalize(event)}`;

    this.children.forEach(child => {
      if (child) {
        // bottom up
        child.broadcast(event, ...args);
        child[handlerName] && child[handlerName](...args);
      }
    });
  }

  emit(event, ...args) {
    const { parent } = this;
    const handlerName = `onChild${capitalize(event)}`;
    if (parent) {
      parent[handlerName] && parent[handlerName](...args);
      parent.emit(event, ...args);
    }
  }

  onParentCheck(checked) {
    if (!this.isDisabled) {
      this.setCheckState(checked);
    }
  }

  onChildCheck() {
    const { children } = this;
    const validChildren = children.filter(child => !child.isDisabled);

    let checked
    /**
     * FIXME:如果有效的加载完并全选中，但是无效的节点没加载完，这时下面的逻辑就有问题，需要用户告知无效节点数量
     * add by jyj
     * 优先使用用户传入的total，需要判断total是否等于选中子节点数量
     */
    if (typeof this.total === 'number') {
      const invalidNum = children.filter(child => child.isDisabled).length;
      const checkedNum = validChildren.filter(child => child.checked).length;
      checked = (invalidNum + checkedNum == this.total)
    } else {
      checked = validChildren.length
        ? validChildren.every(child => child.checked)
        : false;
    }
    this.setCheckState(checked);
  }

  setCheckState(checked) {
    let totalNum = this.children.length;
    /**
     * add by jyj
     * 优先使用用户传入的node.data.total
     */
    if (typeof this.total === 'number') {
      totalNum = this.total;
    }
    const checkedNum = this.children.reduce((c, p) => {
      const num = p.checked ? 1 : (p.indeterminate ? 0.5 : 0);
      return c + num;
    }, 0);
    this.checked = checked;
    this.indeterminate = checkedNum !== totalNum && checkedNum > 0; // 设置半选
  }

  syncCheckState(checkedValue) {
    const value = this.getValueByOption();
    const checked = this.isSameNode(checkedValue, value);

    this.doCheck(checked);
  }

  doCheck(checked) {
    if (this.checked !== checked) {
      if (this.config.checkStrictly) {
        this.checked = checked;
      } else {
        // bottom up to unify the calculation of the indeterminate state
        this.broadcast('check', checked);
        this.setCheckState(checked);
        this.emit('check');
      }
    }
  }
}
