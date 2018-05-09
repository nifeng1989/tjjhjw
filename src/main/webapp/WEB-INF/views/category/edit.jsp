<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="../head.jsp" %>
<%@page import="org.tjjhjw.model.Category" %>
<div>
    <form name="mainForm" id="mainForm" action="<%=basepath%>/category/save.go">
        <table class="table">
            <tr>
                <td>
                    名称
                </td>
                <td>
                    <input type="text" name="name" class="input-medium" value="${category.name}">
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" value="提交" class="button">
                </td>
            </tr>
        </table>
    </form>
</div>
<%@include file="../footer.jsp"%>
