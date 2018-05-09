package org.tjjhjw.service;

import org.tjjhjw.dao.UserDao;
import org.tjjhjw.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by fengni on 2016/5/9.
 */
@Service
public class UserService {
    @Autowired
    UserDao userDao;

    public User get(String username, String password) {
        return new User();
    }
/*    public User get(int id){
        return userDao.get(id);
    }

    public User get(String username,String password){
        return userDao.getUser(username, password);
    }*/
}
