1.加载：滚动加载/懒加载，获取到加载到的数据，push数据前，先判断是否有已存在的节点（通过搜索加入的），有的话，过滤掉已有的

2.搜索：搜索时，获取到搜索数据，push前，先过滤掉已加载的节点，然后再将搜索data append到store
  已完成