package org.tjjhjw.service;

import org.tjjhjw.dao.CategoryDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by fengni on 2016/5/9.
 */
@Service
public class CategoryService {
    @Autowired
    CategoryDao categoryDao;
/*    public Category get(int categoryId){
        return categoryDao.get(categoryId);
    }

    public int update(Category category){
        return categoryDao.update(category);
    }

    public int insert(Category category){
        return categoryDao.insert(category);
    }

    public void fillPage(Page<Category> page){
       categoryDao.fillPage(null,page);
    }

    public int delete(int id){
        return categoryDao.delete(id);
    }*/
}
