function addPageHeader(url){
   var header1= "<div class=\"navbar navbar-inverse navbar-fixed-top\"><div class=\"navbar-inner\"><div class=\"container\"><button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"brand\"  href=\"/welcome.go\">后台管理系统</a><div class=\"nav-collapse collapse\"><ul class=\"nav\">"
   
   
        
    $.ajax({
        url:url,
        type:"get",
        success:function(data){
            var lilist ="";
            var datatr = eval(data);
            var header2="</ul></div><!--/.nav-collapse --><a href=\"logout.go\" class=\"pull-right\">logout</a><span class=\"label pull-right\">"+datatr.username+"&nbsp&nbsp欢迎你</span></div></div></div>";
            for(var i=0;i<datatr.page.length;i++){
                lilist = lilist+"<li><a href=\"/"+datatr["page"][i].page+".go\">"+datatr["page"][i].pagename+"</a></li>";
            }
            $("body").prepend(header1+lilist+header2);
        }
    });
    
}