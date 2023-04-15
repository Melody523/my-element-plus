<template>
	<div class="page-suffix">
		<slot name="default"><span></span></slot>
		<el-pagination
			background
			small
			:page-sizes="pageSizeArr"
			:total="total"
			:current-page="currentPage"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			@size-change="sizeChange"
			@current-change="currentChange"
			:pager-count="pagerCount"
		></el-pagination>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'ThePagination',
	emits: ['custCurrentChange', 'custSizeChange'],
	props: {
		pageSizeArr: {
			type: Array as () => number[],
			default: () => [5, 10, 15, 20, 50, 100],
		},
		currentPage: {
			type: Number,
			default: 1,
		},
		pageSize: {
			type: Number,
			default: 15,
		},
		total: {
			type: Number,
			default: 0,
		},
		pagerCount: {
			type: Number,
			default: 5,
		},
	},
	setup(props, { emit }) {
		// 当前页码改变事件
		const sizeChange = (val: number): void => {
			emit('custSizeChange', val);
		};
		// 翻页事件
		const currentChange = (val: number): void => {
			emit('custCurrentChange', val);
		};
		return {
			sizeChange,
			currentChange,
		};
	},
});
</script>

<style lang="less" scoped>
.page-suffix {
	height: 42px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	position: sticky;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
	z-index: 10;
	border-top: 1px solid #ebeef5;
}
// 样式更新
 :deep(.el-pagination.is-background .el-pager li){
    background-color: #fff;
    border: 1px solid #BFBFBF;
 }
// 样式更新
 :deep(.el-pager+button.btn-next[type=button]){
    background-color: #fff;
    border: 1px solid #BFBFBF;
 }
// 样式更新
 :deep(.el-pagination__sizes+button.btn-prev[type=button]){
    background-color: #fff;
    border: 1px solid #BFBFBF;
 }

 :deep(.el-pagination.is-background .btn-prev:disabled){
  background-color: #f5f5f5;
  border: 1px solid #BFBFBF;
 }
 :deep(.el-pagination.is-background .btn-next:disabled){
  background-color: #f5f5f5;
  border: 1px solid #BFBFBF;
 }
 :deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active){
  background: #FFFFFF;
  border: 2px solid #256BFF;
  color: #256BFF;
  font-weight: 500;
 }

</style>
