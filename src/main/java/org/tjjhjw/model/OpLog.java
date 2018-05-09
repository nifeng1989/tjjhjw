package org.tjjhjw.model;


import javax.persistence.*;
import java.util.Date;

/**
 * Created by fengni on 2016/5/9.
 */
@Entity
public class OpLog {
    @Id
    @Column
    @GeneratedValue
    private int id;

    @Column
    private int crId;

    @Column
    private Date date;

    @Column
    private String operation;

    @Column
    private int userId;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getCrId() {
        return crId;
    }

    public void setCrId(int crId) {
        this.crId = crId;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }
}
