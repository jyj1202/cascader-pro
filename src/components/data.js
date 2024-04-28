// 生成一百条数据
const data = Array.from({ length: 10 }, (item, index) => ({
  label: `远程选项${index + 1}`,
  value: index + 1,
  total: 30,
  children: Array.from({ length: 30 }, (subItem, subIndex) => ({
      label: `选项${index + 1}-${subIndex + 1}`,
      value:   `${(index + 1)}-${subIndex + 1}`,
      leaf: true,
      parent: index + 1,
      disabled: subIndex == 14
  }))
}));
export const rootData = Array.from({ length: 10 }, (item, index) => ({
  label: `远程选项${index + 1}`,
  value: index + 1,
  children: [],
  leaf: false,
  total: 30,
  // hideMultiple: true,
//   selfDisabled: true
}))

// 递归函数，用于搜索并返回符合条件的叶子节点
function searchLeaves(node, searchString, results) {
  if (node.children) {
      node.children.forEach(child => {
          searchLeaves(child, searchString, results);
      });
  } else {
      if (searchString === "" || node.label.includes(searchString)) {
          results.push(node);
      }
  }
}

// 根据搜索字符串在树结构中查找符合条件的叶子节点，并返回扁平化的数据
export function searchData(searchString, pageNum, pageSize) {
    const results = [];
    let startIndex = (pageNum - 1) * pageSize;
    let endIndex = pageNum * pageSize;
    
    data.forEach(node => {
        searchLeaves(node, searchString, results);
    });
    
    const paginatedResults = results.slice(startIndex, endIndex);
    
    console.log('search xxxxxxxxxxx:',searchString, pageNum, pageSize, paginatedResults);
  return {
      total: results.length,
      data: paginatedResults
  };
}

// 查询指定父节点下的子节点数据并进行分页
export function getData(parentId, pageNum, pageSize) {
  const parentIndex = parentId - 1;
  if (parentIndex >= 0 && parentIndex < data.length) {
      const parent = data[parentIndex];
      if (parent.children) {
          const startIndex = (pageNum - 1) * pageSize;
          const endIndex = pageNum * pageSize;
          console.log('getData xxxxxxxxxxx:', pageNum, pageSize, parent.children.length, parent.children.slice(startIndex, endIndex));
          return {
              total: parent.children.length,
              data: parent.children.slice(startIndex, endIndex)
          };
      }
  }
  return {
      total: 0,
      data: []
  };
}

