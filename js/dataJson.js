;(function($){
	//遍历json数组，在页面填充内容  参数 data:json对象  ；object需要填充内容的ul的class名;type:视频文件类型
	$.dataJson=function(data,obj,type){
        this.pageSize=8;    //每页的尺寸
		this.pageNo=1;     //当前页数
		this.json =data ;  //json赋值
		var total=0;
		var _index=0;
		if(type==0){
			this.pagenum=Math.ceil(this.json.length/this.pageSize);  //共计多少页
			$.each(this.json,function(index,value){
					if(index<$.pageSize){
						 if(value.school==""){
						 	$("."+obj).append('<li><a href="'+value.src+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><span class="play"></span></a> </li>');
						 }else{
						 	$("."+obj).append('<li><a href="detail.html?id='+value.id+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><p class="article">内容：'+value.content1+'</p><p class="article">功能点：'+value.funPoint+'</p><span class="play"></span></a> </li>');
						 }
					  
					}
				});
		}else{
		   for(var i in type){
		   		$.each(this.json,function(index,value){
				   if(value.typeId==type[i]){
                     total++;
				   }
				   if(_index<$.pageSize && value.typeId==type[i]){
				   	console.log(value.content);
				   	if(value.school==""){
						 	$("."+obj).append('<li><a href="'+value.src+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><span class="play"></span></a> </li>');
						 }else{
					$("."+obj).append('<li><a href="detail.html?id='+value.id+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><p class="article">内容：'+value.content1+'</p><p class="article">功能点：'+value.funPoint+'</p><span class="play"></span></a> </li>');
					}
					_index++;
					}
			});
		   }
			this.pagenum=Math.ceil(total/this.pageSize);  //共计多少页
		}
		  
        
        //在页面填充 分页
        if($(".page")){
        	$(".page").remove();
        }
        if(this.pagenum>0){

        	if(this.pagenum>1){
			$(".towpage").append('<ul class="page"><li><a href="javascript:void(0)" onclick="$.jump(-2,\''+obj+'\',\''+type+'\')">上一页</a></li><li><a href="javascript:void(0)" onclick="$.jump(-1,\''+obj+'\',\''+type+'\')">下一页</a></li></ul>');
			for(var n=this.pagenum;n>0;n--){
			$(".page li:eq(0)").after('<li><a href="javascript:void(0)" onclick="$.jump('+n+',\''+obj+'\',\''+type+'\')">'+n+'</a></li>');
			}
			$(".page li").eq(1).addClass("active");
			}
		}else{
			  $(".course_list").html("暂无内容").css({"text-align":"center","margin-top":"50px","color":"#056FBA"});
		}
		$(".page").css("margin-left",($(".towpage").width()-$(".page").width())/2);
	};

	  //分页跳转 参数 n:待跳转的页 -1表示下一页， -2便是上一页；object需要填充内容的ul的class名 type:视频文件类型
     $.jump=function(n,obj,type){
     	var _index=0;
	     if(n==-1 ){
			n=$.pageNo+1;
			}else if(n==-2){
			n=$.pageNo-1;
			}
		  if(n<=$.pagenum && n>0){
			$.pageNo=n;
			
		 	$(".page li").eq(n).addClass("active").siblings().removeClass("active");
		  }
		  
		if(n<=$.pagenum && n>0){
			$("."+obj).html("");
		 	console.log($.pageNo);
			if(type==0){
				$.each($.json,function(index,value){
					 if(index<$.pageSize*n && index>=$.pageSize*(n-1)){
					 	if(value.school==""){
						 	$("."+obj).append('<li><a href="'+value.src+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><span class="play"></span></a> </li>');
						 }else{
					    $("."+obj).append('<li><a href="detail.html?id='+value.id+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><p class="article">内容：'+value.content1+'</p><p class="article">功能点：'+value.funPoint+'</p><span class="play"></span> </a></li>');
							}
						 }
				});
			}else{
				var types=type.split(",");
				for(var i in types){
					$.each($.json,function(index,value){
							console.info(types[i]);
						if(value.typeId==types[i]){
			               if(_index<$.pageSize*n && _index>=$.pageSize*(n-1) ){
			               	if(value.school==""){
						 	$("."+obj).append('<li><a href="'+value.src+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><span class="play"></span></a> </li>');
						 }else{
							  $("."+obj).append('<li><a href="detail.html?id='+value.id+'"  target="_Blank"><div><img src="'+value.pic+'" alt=""></div><p class="title">'+value.title+'</p><p class="article">内容：'+value.content1+'</p><p class="article">功能点：'+value.funPoint+'</p><span class="play"></span> </a></li>'); 
							}
						 }
							_index++;
						}
					});
				}
			}
		}
		return false;
     };
})(jQuery);