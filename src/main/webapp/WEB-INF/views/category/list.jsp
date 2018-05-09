<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="../head.jsp" %>
<%@page import="org.tjjhjw.model.Category" %>
<div>
    <form name="mainForm" id="mainForm" action="<%=basepath%>/category/list.go">
        <table class="table table-bordered">
            <tr>
                <td>ID</td>
                <td>名称</td>
            </tr>
            <c:forEach var="category" items="${page.result}">
                <tr>

                    <td>
                            ${category.id}
                    </td>

                    <td>
                            ${category.name}
                    </td>
                </tr>
            </c:forEach>
        </table>
        <%@include file="../pagefooter.jsp" %>
    </form>
</div>
<%@include file="../footer.jsp"%>
