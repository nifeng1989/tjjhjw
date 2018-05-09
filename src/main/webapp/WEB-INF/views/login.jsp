<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="head.jsp"%>

<div>
    <c:if test="${errorMsg!=null}"> ${errorMsg}</c:if>
    <div class="container">
        <form name="formUser" class="form-signin" action="loginConfirm.go" method="post">
            <h2 class="form-signin-heading">请登录</h2>
            <div class="panel">
                <input type="text" name="username" class="input-block-level" placeholder="username">
                <input type="password" name="password" class="input-block-level" placeholder="Password">
                <button class="btn btn-primary login" type = "submit" onclick="return confirm()">登录</button>
                <a class="btn btn-primary" href="register.go">注册</a>
                <a class="brand pull-right" href="modifypw.go">修改密码</a>
            </div>
        </form>
        <div style="text-align:center;">
            <span class="label label-important">提示:</span>
            <p>请使用Chrome浏览器登录本系统！</p>
        </div>
    </div>
</div>
<script type="text/javascript">
    function confirm()
    {
        if(document.formUser.username.value=="")
        {
            alert("用户名不能为空");
            return false;
        }

        else if(document.formUser.password.value=="")
        {
            alert("密码不能为空");
            return false;
        }
    }

</script>

<%@include file="footer.jsp"%>