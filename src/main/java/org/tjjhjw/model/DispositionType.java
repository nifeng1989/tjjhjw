package org.tjjhjw.model;

import javax.persistence.*;

@Entity
public class DispositionType {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

}
