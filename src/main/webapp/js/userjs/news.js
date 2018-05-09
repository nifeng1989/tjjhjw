function changeKey(platform,pagenum,isremove,channelId){
    if(isremove){
        $("#iosDiv").find(".newsTemplate").remove();
        $("#androidDiv").find(".newsTemplate").remove();
        $("#baseDiv").find(".newsTemplate").remove();
    }
    if(platform=="IOS")
        getNewsData(pagenum,"iosDiv",platform,channelId);
    else if(platform=="Android")
        getNewsData(pagenum,"androidDiv",platform,channelId);
    else if(platform=="Base")
        getBaseData(pagenum,channelId);
};

//////ios android 取数据逻辑
function getNewsData(pageNum,div,platform,channelId){
    var template = $("#n_template").clone();
    var newsNum = (parseInt(pageNum)-1)*20;
    $.ajax({
            url:"/channel/news.go",
            type:"post",
            data:{platform:platform,pageNum:pageNum,channelId:channelId},
            success:function(data){
                var datatr = eval(data.data);
                for(var i =0;i<datatr["articles"].length;i++){
                    var t_news = template.clone();
                    newsNum=newsNum+1;
                    t_news.find("#news_num").html("#"+newsNum);
                    t_news.attr("id","news_list");
                    var type = datatr["articles"][i]["templateType"];
                    if(type==14 || type ==12 || type==13 || type==21 || type==22 || type==23){
                        if(datatr["articles"][i]["adType"]==2){
                            t_news.find("h4").html("这个是空广告");
                        }else{
                        var pic = datatr["articles"][i]["data"]["special"]["dict"]["picture"];
                        var txt = datatr["articles"][i]["data"]["special"]["dict"]["title"];
                        t_news.find("img").attr("src",datatr["articles"][i]["data"][pic]["file"]);
                        t_news.find("h4").html(datatr["articles"][i]["data"][txt]["text"]);
                        t_news.find("#ptype").html("(templateType="+datatr["articles"][i]["templateType"]+" ; newsType="+datatr["articles"][i]["newsType"]+")");
                        }
                        ///////添加参数
                                      
                    }else{
                        var imgurl="";
                        if (typeof(datatr["articles"][i]["pics"]) != "undefined") { 
                            imgurl = datatr["articles"][i]["pics"][0];
                        }  
                        t_news.find("img").attr("src",imgurl);
                        t_news.find("h4").html(datatr["articles"][i]["title"]);
                        t_news.find("#commentnum").html("评论数: "+datatr["articles"][i]["commentNum"]);
                        t_news.find("#ptype").html("(templateType="+datatr["articles"][i]["templateType"]+" ; newsType="+datatr["articles"][i]["newsType"]+")");

                        ///////添加参数
                        t_news.find("#p_param").html("ChannelNewsId: "+datatr["articles"][i]["channelNewsId"] +"<br/>"+ "Link: "+ datatr["articles"][i]["link"]);  
                    }
                    $("#"+div).append(t_news);
                }
            }         
        });  
};

Array.prototype.insert = function (index, item) {  
    this.splice(index, 0, item);  
};  

///base 取数据逻辑
function getBaseData(pagenum,channelid){
    var template = $("#n_template").clone();
    var newsNum = (parseInt(pagenum)-1)*20;
    var querylist = new Array();
    var newsparam = new Array();
    if(pagenum==1){
         $.ajax({
                url:"/channel/queryList.go",
                type:"post",
                async: false,
                data:{channelId:channelid,pageNo:pagenum,isFocus:1},
                success:function(data){
                    var datatr = JSON.parse(data.data);
                    if(datatr.status!=401){
                        querylist.push(datatr.data[0].channelNewsId);
                        newsparam.push(datatr.data[0].weight);
                    }
                }
        });
    };
    
    $.ajax({
            url:"/channel/queryList.go",
            type:"post",
            async: false,
            data:{channelId:channelid,pageNo:pagenum,isFocus:0},
            success:function(data1){
                var datatr = JSON.parse(data1.data);
                for(var i=0;i<datatr.data.length;i++){
                    querylist.push(datatr.data[i].channelNewsId);
                    newsparam.push(datatr.data[i].weight);
                }
            }
    });
    if(pagenum=="1" && channelid=="1"){
        $.ajax({
                url:"/channel/queryLinkNews.go",
                type:"post",
                async: false,
                data:{channelId:channelid,pageNo:"1"},
                success:function(data1){
                    var datatr = JSON.parse(data1.data);
                    if(datatr.data[0].newsId!=undefined){
                        querylist.insert(5,datatr.data[0].newsId);
                        newsparam.insert(5,datatr.data[0].channelId);
                    }
                }
        });
    }
    
    
    for(var i=0;i<querylist.length;i++){
        if(i==3||i==9||i==15){
            var t_news = template.clone();
            newsNum=newsNum+1;
            t_news.find("#news_num").html("#"+newsNum);
            t_news.attr("id","news_list");
            t_news.find("h4").html("这个是广告");
            $("#baseDiv").append(t_news);
        }
        $.ajax({
                url:"/channel/queryView.go",
                type:"post",
                async: false,
                data:{channelId:channelid,id:querylist[i]},
                success:function(data){
                    var t_news = template.clone();
                    newsNum=newsNum+1;
                    t_news.find("#news_num").html("#"+newsNum);
                    t_news.attr("id","news_list");
                    var view = eval(data.data);
                    var imgurl;
                    if(view["smallPics"]!=undefined && view["smallPics"].length>0)
                        imgurl = view["smallPics"][0];
                    else if(view["videoPics"]!=undefined && view["videoPics"].length>0)
                        imgurl = view["videoPics"][0];
                    else
                        imgurl =view["listPic"];
                    if(imgurl==undefined || imgurl=="")
                        imgurl="nothavehttp";
                    if(imgurl.indexOf("http")==-1)
                        imgurl="http://n1.itc.cn/img7/adapt/wb/"+imgurl;
                    t_news.find("h4").html(view["title"]);
                    t_news.find("img").attr("src",imgurl);
                    t_news.find("#commentnum").html("评论数: "+view["commentNum"]);
                    t_news.find("#ptype").html("(templateType="+view["templateType"]+" ; newsType="+view["newsType"]+")");
                    ///////添加参数
                    if(i==5 && newsparam[i].weight==undefined){
                        t_news.find("#p_param").html("NewsId: "+view["newsId"]+"<br/>"+"isFlash: "+view["isFlash"]+"<br/>channelId : "+newsparam[i]);
                    }else{
                    t_news.find("#p_param").html("ChannelNewsId: "+view["channelNewsId"]+"<br/>"+"isFlash: "+view["isFlash"]+"<br/>weight: "+newsparam[i].weight+"<br/>isTop: "+newsparam[i].isTop+"<br/>ct: "+newsparam[i].ct);
                    }
                    $("#baseDiv").append(t_news);
                }         
            }); 
    }
}

function nextPage(event){
    var page = parseInt($(event).next().val())+1;
    var id  = $("#channelId").val();
    $(event).next().val(page);
    changeKey("IOS",page,false,id);
    changeKey("Android",page,false,id);
    changeKey("Base",page,false,id);
}

function channelListClick(event){
    var id = $(event).parent().attr("id");
    $("#channelId").val(id);
    $("#pageNum").val(1);
    changeKey("IOS",1,true,id);
    changeKey("Android",1,true,id);
    changeKey("Base",1,true,id);
}
function show(event){
    $(event).parent().parent().next().slideToggle();
}