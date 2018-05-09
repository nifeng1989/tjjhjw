package org.tjjhjw.controller;

import org.tjjhjw.model.User;
import org.tjjhjw.service.UserService;
import org.tjjhjw.util.RequestUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by fengni on 2016/5/9.
 */
@Controller
public class LoginController {
    @Autowired
    UserService userService;
    @RequestMapping(value = "/login.go")
    public String login(Model model,HttpServletRequest request, HttpServletResponse response) {
        String username = RequestUtil.getRequestString(request,"username");
        String password = RequestUtil.getRequestString(request,"password");
        if(StringUtils.isBlank(username)||StringUtils.isBlank(password)){
            model.addAttribute("errorMsg","用户名或密码为空");
            return "login";
        }
        User user = userService.get(username,password);
        if(user != null){
            request.getSession().setAttribute("user",user);
        }else {
            model.addAttribute("errorMsg","用户名或密码错误");
            return "login";
        }
        return "category/list";
    }

    @RequestMapping(value = "/toLogin.go")
    public String toLogin(Model model,HttpServletRequest request, HttpServletResponse response) {
        return "login";
    }

}
