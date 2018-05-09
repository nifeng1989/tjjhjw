<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%
    String basepath = request.getContextPath();
    response.setHeader("Cache-Control", "no-cache");
    response.setHeader("Pragma", "no-cache");
    response.setDateHeader("Expires", 0);
%>
<html>
<head lang="zh-CN">
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="<%=basepath%>/css/reset.min.css"/>
    <link rel="stylesheet" type="text/css" href="<%=basepath%>/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="<%=basepath%>/css/bootstrap-responsive.css"/>
    <link rel='stylesheet' type="text/css" href="<%=basepath%>/css/main.css"/>
    <link rel='stylesheet' type="text/css" href="<%=basepath%>/css/edj-widget-citybox.css"/>
    <link rel="stylesheet" type="text/css" href="<%=basepath%>/css/jquery-ui.css">
</head>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-transition.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-alert.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-modal.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-dropdown.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-scrollspy.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-tab.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-tooltip.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-popover.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-button.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-collapse.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-carousel.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/bootstrap-typeahead.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/doT.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/jquery-2.1.4.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/jquery.md5.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/jquery-form.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/common.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/jquery-ui.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/jquery-ui-i18n.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=basepath%>/js/edj-widget-citybox.js"></script>
<body>
