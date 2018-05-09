package org.tjjhjw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Administrator on 2015/9/3.
 */
@Controller
@RequestMapping(value = "record")
public class RecordController {
    @RequestMapping(value = "/record.go")
    public void save(HttpServletRequest request,HttpServletResponse response){
        try {
            response.getWriter().write("hello world");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
