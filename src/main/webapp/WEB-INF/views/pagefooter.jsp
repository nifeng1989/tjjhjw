<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!--翻页start-->
<div class="search_result_pageLink mT5">
	<input type="hidden" name="pageNo" id="pageNo" value="${page.pageNo}"/>
	<input type="hidden" name="pageSize" id="pageSize" value="${page.pageSize}"/>


	<div class="page">第${page.pageNo}页, 共${page.totalPages}页
		<span class="bar">│</span>总${page.totalCount }条

		<c:if test="${page.hasPre}">
			<span class="bar">│</span><a href="javascript:jumpPage(1)">首页</a>
			<span class="bar">│</span><a href="javascript:jumpPage(${page.prePage})">上一页</a>
		</c:if>

		<c:if test="${page.hasNext}">
			<span class="bar">│</span><a href="javascript:jumpPage(${page.nextPage})">下一页</a>
			<span class="bar">│</span><a href="javascript:jumpPage(${page.totalPages})">末页</a>
		</c:if>

		<c:if test="${page.totalPages <100}">
			<span class="bar">│</span>
			转到第
			<select name="jumpPage" id="jumpPageText" onchange="doJumpPage();">
				<c:forEach begin="1" end="${page.totalPages }" var="pno">
					<option value="${pno }" <c:if test="${pno eq page.pageNo }">selected="selected"</c:if>>${pno }</option>
				</c:forEach>
			</select>
			页.
		</c:if>


		<c:if test="${page.totalPages >=100 }">
			<span class="bar">│</span>
			转到第
			<select name="jumpPage" id="jumpPageText" onchange="doJumpPage();">
				<c:if test="${page.pageNo > 10}">
					<c:forEach begin="${page.pageNo -10}" end="${page.pageNo +20}" var="pno">
						<option value="${pno }" <c:if test="${pno eq page.pageNo }">selected="selected"</c:if>>${pno }</option>
					</c:forEach>
				</c:if>
				<c:if test="${page.pageNo <= 10}">
					<c:forEach begin="1" end="${page.pageNo +20}" var="pno">
						<option value="${pno }" <c:if test="${pno eq page.pageNo }">selected="selected"</c:if>>${pno }</option>
					</c:forEach>
				</c:if>
			</select>
			页
		</c:if>

		<!--    <input type="button" value="GO" onclick='doJumpPage();'/>   -->
	</div>
</div>
<!--翻页end-->

<script type="text/javascript">
	function jumpPage(pageNo){
		if(pageNo!=''){
			jQuery("#pageNo").val(pageNo);
			jQuery("#mainForm").submit();
		}else{
			alert('请选择正确的页码！');
		}
	}
	function doJumpPage(){
		var pageNo=jQuery("#jumpPageText").val();
		jumpPage(pageNo);
	}
</script>