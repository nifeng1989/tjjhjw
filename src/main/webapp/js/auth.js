window.onload=function(){
    addPageHeader("header.go");
    $.ajax({
        url:"everyElement.go", 
            type:"post",
            success:function(data){
             var datatr=(eval(data))["data"];
             for(var i=0;i<datatr["module"].length;i++){
                var o=document.createElement("option");
                var str = datatr["module"][i].split("_");
                o.setAttribute("value",str[0]); 
                o.innerHTML=str[1];
                 $("#selemodule").append(o);
             }
            for(var i=0;i<datatr["op"].length;i++){
                var o=document.createElement("option");
                var str = datatr["op"][i].split("_");
                o.setAttribute("value",str[0]); 
                o.innerHTML=str[1];
                 $("#seleop").append(o);
             }
            for(var i=0;i<datatr["content"].length;i++){
                var o=document.createElement("option");
                var str = datatr["content"][i].split("_");
                o.setAttribute("value",str[0]); 
                o.innerHTML=str[1];
                 $("#selecontent").append(o);
             }
            }  
    });
    
    getAuthlist();
}

function addClick(){
    var role = $("#rolebtn").val();
    var moduleid = $("#selemodule").val();
    var op = $("#seleop").val();
    var content = $("#selecontent").val();
    $.ajax({
            url:"addAuth.go", 
            type:"post",
            data:{role:role,module:moduleid,op:op,content:content},
            success:function(data){
             var datatr=eval(data);
                if(datatr.code=="302"){
                    alert(datatr.msg);
                }else{
                    getAuthlist();
                }
            } 
     });

};
function getAuthlist(){
    var $right = $("#right");
    var role = $("#rolebtn").val();
    $.ajax({
            url:"authDetailList.go", 
            type:"post",
            data:{role:role},
            success:function(data){
             var datatr=(eval(data))["data"];
             $right.find("option").remove();  
                for(var i in datatr){
                    var authElement = document.createElement("option");
                    authElement.setAttribute("value",i);
                    authElement.innerHTML=datatr[i];
                    $right.append(authElement);
                }
            }  
     });
}

/** 
  * 移动select的部分内容,必须存在value，此函数以value为标准进行移动 
  * 
  * oSourceSel: 源列表框对象  
  */  
 function moveSelected(oSourceSel)  {  
     //建立存储value和text的缓存数组  
     var arrSelValue = new Array();  
     var arrSelText = new Array();
     var role = $("#rolebtn").val();
     
     //此数组存贮选中的options，以value来对应  
     var arrValueTextRelation = new Array();
     var datalist=[];
     var index = 0;//用来辅助建立缓存数组  
     //存储源列表框中所有的数据到缓存中，并建立value和选中option的对应关系  
     for(var i=0; i<oSourceSel.options.length; i++){  
         if(oSourceSel.options[i].selected)  {  
             //存储  
             arrSelValue[index] = oSourceSel.options[i].value;  
             arrSelText[index] = oSourceSel.options[i].text;  
             //建立value和选中option的对应关系  
             arrValueTextRelation[arrSelValue[index]] = oSourceSel.options[i];
             datalist.push(arrSelValue[index]);
             index ++;  
         }  
     }
     $.ajax({
            url:"removeAuth.go", 
            type:"post",
            data:{authlist:datalist,role:role},
            success:function(data){
             //删除源列表框中的对应项  
             for(var i=0; i<arrSelText.length; i++){ oSourceSel.removeChild(arrValueTextRelation[arrSelValue[i]]);
             }
            }  
     });

 }  
