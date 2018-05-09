package org.tjjhjw.filter;

import org.tjjhjw.model.User;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * Created by fengni on 2015/9/3.
 */
public class UserFilter implements Filter {
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
        User user = (User)httpRequest.getSession().getAttribute("user");
        filterChain.doFilter(servletRequest, servletResponse);
    }

    public void destroy() {

    }
}
