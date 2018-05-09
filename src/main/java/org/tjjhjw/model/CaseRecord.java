package org.tjjhjw.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class CaseRecord {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;//案件ID
    @Column
    private String caseName;//案件短名称

    @Column
    private int caseType;//案件类型

    @Column
    private byte sex; //违纪人性别

    private String staffName;//违纪人姓名

    private String staffDepartment;//违纪人单位

    private String staffSubDepartment;//违纪人街道

    private String staffJobTitle;//违纪人职称

    private int  politicalStatus;//政治面貌

    private int staffCategory;//人员类别

    private int staffLevel;//级别

    private Date violationTime;//违纪时间

    private int violationCategory;//违纪种类

    private int notifyType;//通报类型

    private int  partyDisposition;//党纪处分

    private int  govDisposition;//政纪处分

    private int sendDepartment;//移送科室

    private Date sendTime;

    private int notifyRecode;//提醒记录

    private float violationMoney;//违纪罚款

    private int materialsComplete;//材料是否齐全

    private String detail;//简要违纪事实

    private String caseId;

    private int psId;//流程ID

    @Column
    private int caseNo;

}
