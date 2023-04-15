// 过滤弹窗回显list
const filterCheckTableList = (
	list: any,
	catchValue: any
) => {
	return (
		list?.map((item: any) => {
			let Obj = {};
			catchValue?.forEach((itm: any) => {
				Obj[itm] = item[itm] || '';
			});
			return Obj;
		}) || []
	);
};
export {
  filterCheckTableList
}