package org.tjjhjw.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Process {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String name;//流程的名字
    @Column
    private int expecteDay;//预计耗时
    @Column
    private int tipsDay;//提醒时间
    @JoinColumn
    @ManyToOne
    private List<Process> nextProcessTplList;//后续流程
}
