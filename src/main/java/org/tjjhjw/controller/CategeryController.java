package org.tjjhjw.controller;

import org.tjjhjw.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * Created by Administrator on 2015/9/3.
 */
@Controller
public class CategeryController {

    @Autowired
    CategoryService categoryService;
/*
    @RequestMapping(value = "/category/save.go")
    public String save(Model model, HttpServletRequest request, HttpServletResponse response) {
        int id = RequestUtil.getRequestInt(request,"id");
        String name = RequestUtil.getRequestString(request,"name");
        Category category;
        if(id>0){
            category = categoryService.get(id);
            category.setName(name);
            categoryService.update(category);
        }else {
            category = new Category();
            category.setName(name);
            categoryService.insert(category);
        }
        return "category/list";


    }

    @RequestMapping(value = "/category/list.go")
    public String list(Model model,HttpServletRequest request, HttpServletResponse response,Page<Category> page) {
        categoryService.fillPage(page);
        model.addAttribute("page",page);
        return "category/list";
    }

    @RequestMapping(value = "/category/toEdit.go")
    public String toEdit(Model model,HttpServletRequest request, HttpServletResponse response) {
        int id = RequestUtil.getRequestInt(request,"id");
        Category category = null;
        if(id>0){
            category = categoryService.get(id);
        }
        model.addAttribute("category",category);
        return "category/edit";

    }

    @RequestMapping(value = "/category/delete.go")
    public String delete(HttpServletRequest request, HttpServletResponse response) {
        int id = RequestUtil.getRequestInt(request,"id");
        categoryService.delete(id);
        return "list";
    }*/
}
