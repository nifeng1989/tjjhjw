$(document).ready(function(e) {
    addPageHeader("../header.go");
    $.ajax({
        url:"initdata.go",    /////请求初始数据 下拉框内容等
            type:"get",
            success:function(data){
             var datatr=(eval(data))["data"];
             for(var i=0;i<datatr["version"].length;i++){
                var o=document.createElement("option");
                o.setAttribute("value",datatr["version"][i]); 
                o.innerHTML=datatr["version"][i];
                 $("#selectVersion").append(o);
             }
             for(var i=0;i<datatr["buildcode"].length;i++){
                var o=document.createElement("option");
                o.setAttribute("value",datatr["buildcode"][i]); 
                o.innerHTML=datatr["buildcode"][i];
                 $("#selectBuild_Code").append(o);
             }
            }
    });
    $("#submit").click(function(){
        var version = $("#selectVersion").val();
        var platform = $("#selectPlatform").val();
        var build_code = $("#selectBuild_Code").val();
        var time = $("#selectCtime").val();
        var cid = $("#cid").val(); 
        getData(version,platform,build_code,time,cid);
      });
    
    $('#selectVersion').change(function(){ 
        var version = $("#selectVersion").val();
        if(version=="all")
            return;
        $.ajax({
        url:"versionBuildCode.go",
        type:"get",
        data:{version:version},
        success:function(data){
            var datatr=(eval(data))["data"];
            $("#selectBuild_Code").children().slice(1).remove();
             for(var i=0;i<datatr["buildcode"].length;i++){
                var o=document.createElement("option");
                o.setAttribute("value",datatr["buildcode"][i]); 
                o.innerHTML=datatr["buildcode"][i];
                 $("#selectBuild_Code").append(o);
             }
        }
     });
       
    }); 
    
    
});


////图表内容
function showChart(all_data){
//Get context with jQuery - using jQuery's .get() method.
$(".span7.div_chart").find("canvas").remove();
var c = document.createElement('canvas');
    c.setAttribute("width",630);
    c.setAttribute("heigh",170);
var ctx = c.getContext("2d");
//获取横坐标天数
var currday = new Date();
var day = new  Date(currday.getFullYear(),currday.getMonth()+1,0);
var daycount = day.getDate();
var a = new Array(daycount);
for(var i=0;i<daycount;i++){
    a[i]=i+1;
}
var data = {
	labels : a,
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : all_data
		}
	]
}
var myNewChart = new Chart(ctx).Line(data);
    $(".span7.div_chart").append(c);
    
};
////dataTable 插件设置
function initTable (){
	return $('.datatable').dataTable( {
        "bDestory":true,
        "bSort":true,
        "oLanguage" : {
		"sLengthMenu" : "每页显示 _MENU_ 条记录",
		"sZeroRecords" : "对不起，没有匹配的数据",
		"sInfo" : "第 _START_ - _END_ 条 / 共 _TOTAL_ 条数据",
		"sInfoEmpty" : "没有匹配的数据",
		"sInfoFiltered" : "(数据表中共 _MAX_ 条记录)",
		"sProcessing" : "正在加载中...",
		"sSearch" : "全文搜索：",
		"oPaginate" : {
			"sFirst" : "第一页",
			"sPrevious" : " 上一页 ",
			"sNext" : " 下一页 ",
			"sLast" : " 最后一页 "
		}
	},
		 "bRetrieve": true,
		 } );
}

function getData(version,platform,build_code,time,cid){
     $.ajax({
        url:"crashquery.go",
        type:"get",
        data:{version:version,platform:platform,build_code:build_code,time:time,cid:cid},
        success:function(data){
            $("#mainTable").children().remove();
            $('.datatable').dataTable().fnClearTable();
            $('.datatable').dataTable().fnDestroy();
            var datatr=eval(data);
            if(datatr["data"]==null){
                alert("没有符合条件的日志！");
                return;
            }
            var num=1;
            $("#s_allcount").html(datatr["data"]["allcount"]);
            $("#s_cidcount").html(datatr["data"]["cidcount"]);         
            var day = new Date();
            var daycount = day.getDate();
            var _all = new Array(daycount);  ///初始化日期数据
                for(var i=0;i<_all.length;i++){
                    _all[i]=0;
            }
            if(datatr["data"]["dataofchart"]!=null){
                for(var i=0;i<datatr["data"]["dataofchart"].length;i++){
                    var position = datatr["data"]["dataofchart"][i]["date"].split("-")[2];
                    _all[position-1]=datatr["data"]["dataofchart"][i]["allcount"];
                }
                showChart(_all);
            }
            for(var i in datatr["data"]){
                if(i=='allcount' || i=='cidcount' || i=='dataofchart'){continue;}
                for(var j in datatr["data"][i]){
                    var c_abstract = datatr["data"][i][j]["detail"];
                    var c_allcount = datatr["data"][i][j]["allcount"];
                    var c_cidcount = datatr["data"][i][j]["cidcount"];
                    var c_md5 = datatr["data"][i][j]["crash_md5"];
                    var c_finger = datatr["data"][i][j]["crash_fingerprint"];
                    var tableinfo = createTable(num,c_abstract,c_allcount,c_cidcount,i.split("_")[0],c_md5,c_finger);
                    $("#mainTable").append(tableinfo);
                    num++;
                }
            }
            initTable();
        }
});
};
function createTd(inner,id){
    var td=document.createElement('td'); 
        td.id=id;
    if(id!="usercount")
        td.innerHTML = inner;
    else{
        td.innerHTML = inner;
        td.onclick = function cidClick(){ 
                        var finger = $(this).parent().attr("title");
                        var md5 = $(this).parent().attr("id");
                        var version = $("#selectVersion").val();
                        var build_code = $("#selectBuild_Code").val();
                         $.ajax({
                            url:"cidlist.go",
                            type:"get",
                            data:{md5:md5,finger:finger,version:version,build_code:build_code},
                            success:function(data){
                                var datatr = eval(data);
                                $("#cidmodal_body").children().remove();
                                if(datatr!=null){
                                    for(var i in datatr.data){
                                    $("#cidmodal_body").append("<p>"+datatr.data[i]+"</p>");
                                    }
                                }
                                $("#cidmodal").modal('toggle');
                            }
                         });
                    };
        td.style={color:"red"};
    }
    if(id=="abstract")
        td.onclick=function(){$("#myModal").modal('toggle');};
    return td;
};
           
function createTable(num,abstract,acount,ucount,time,md5,finger){
    //定义行元素标签
    var tr=document.createElement('tr');
    var ab;
    if(abstract !== null){
        var spiltAbstract = abstract.split('\n');
        ab = spiltAbstract[1]+"\n"+spiltAbstract[2];
        ab = ab.replace(/\s+/g, ' ');
    }
    else
        ab='';
    //将列值添加到行元素节点
    tr.id=md5;
    tr.title=finger;
    tr.appendChild(createTd(num,"num")); 
    tr.appendChild(createTd(ab,"abstract"));
    tr.appendChild(createTd(finger,"finger"));
    tr.appendChild(createTd(acount,"allcount"));
    tr.appendChild(createTd(ucount,"usercount"));
    tr.appendChild(createTd(time,"time"));
    ////日志详情模态框
    tr.onclick=function tbClick(){
        abstract = abstract.replace(/\n/g,"<br/>");
        $("#myModal").find("#modal-body").html(abstract);
        $("#myModal").find("#modal-num").html(num);
        $("#myModal").find("#modal-abstract").html(spiltAbstract[1]);
        $("#myModal").find("#modal-allcount").html(acount+'次');
        $("#myModal").find("#modal-usercount").html(ucount+'用户');
        $("#myModal").find("#modal-time").html(time);
        $("#myModal").find("#modal-finger").html(finger);
    };
    //返回生成的行标签 
    return tr;  
};
///表格点击事件，显示日志详情






