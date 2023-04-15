import { ComponentInternalInstance, getCurrentInstance, nextTick, reactive, ref } from 'vue';
import dayjs from 'dayjs'
function useCurrentInstance() {
  const { appContext: { config: { globalProperties } } } = getCurrentInstance() as ComponentInternalInstance
  globalProperties.dayjs = dayjs
  return {
    globalProperties,
  }
}
function isObject(obj: any): boolean {
	return (
		obj !== null &&
		typeof obj === 'object' &&
		Object.prototype.toString.call(obj) !== '[object Date]'
	);
}
function getNotEmptyObject(values: any) {
	if (!isObject(values)) return values; // 如果不是对象的话直接返回
	for (const key in values) {
		if (!values[key] && values[key] !== 0 && typeof values[key] !== 'boolean')
			delete values[key];
	}
	return values;
}
// 判断是否为空，并且不为0和false
const isEmpty = (value: any) => {
	return !Boolean(value) && typeof value !== 'boolean' && value !== 0;
};
function deepClone(cloneObj: any) {
	if (!isObject(cloneObj)) return cloneObj; // 如果不是对象的话直接返回
	const containerObj = Array.isArray(cloneObj) ? [] : {};
	for (const key in cloneObj) {
		if (Reflect.has(cloneObj, key)) {
			if (cloneObj[key] && isObject(cloneObj[key])) {
				containerObj[key] = deepClone(cloneObj[key]);
			} else {
				containerObj[key] = cloneObj[key];
			}
		}
	}
	return containerObj;
}
function getCommonState() {
  const hooksCommonState = reactive<any>({
    tableLoading: false,
    pager: {
      total: 0, // 分页总条数初始值为0
      currentPage: 1, // 默认显示第一页
      pageSize: 15 // 每页条数默认
    }
  });
  const resetInfo = (callback: () => void): void => {
    hooksCommonState.formRef?.resetFields();
    callback();
  };
  const sizeChange = function(val:number, callback: () => void) {
    hooksCommonState.pager.pageSize = val;
    hooksCommonState.pager.currentPage = 1;
    callback();
  }
  const currentChange = function(val:number, callback: () => void) {
    hooksCommonState.pager.currentPage = val;
    callback();
  }
  return {
    hooksCommonState,
    resetInfo,
    sizeChange,
    currentChange,
  };
}
export {
  useCurrentInstance,
  getNotEmptyObject,
  isEmpty,
  deepClone,
	getCommonState,
}