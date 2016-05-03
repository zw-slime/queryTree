 
$(function(){
   var level=1;
   
   var t=eval(type.type);     /*类型*/ 
   var res=eval(resource.res);  /*资源*/ 
    var data0=[];
    var level0=0;
  
    	 /*初始化类型*/
			var o=appendNav1($(".onepage"),t,res,level);    
			console.log(res);
		 	appendNav1($(".onepage"),o.obj[0].child,res,o.level);
			$(".classfy:eq(0) li:eq(0)").addClass("sub_active");
			level=1;
			 /*初始化类型*/
		
		     /*初始化资源  全部*/
		     findType(t,0);
		     $.dataJson(res,"course_list",data0);
		    /*初始化资源  全部*/	
	
    
    		


   

     /*添加类型*/
    function appendNav1(parent,obj,data,level){
        if(obj){
        	  var ul=$('<ul class="classfy"></ul>');
        	  ul.addClass("classfy_"+level);
        	  
        	  level++;
        	  $(".onepage").append(ul);


        	  for(var i in obj){
        	  	 var li=$('<li><a href="javascript:void(0)" class="classfy_'+(level-1)+'_'+i+'" id="'+obj[i].id+'">'+obj[i].name+'<span class="em"></span></a></li>');

        	  	 /*a点击切换事件*/
        	  	 li.find("a").click(function(){
                      /*append类型*/
        	  	 	 	var index=$(this).attr("class").split("_")[2];

   		 		 	     $(this).parent().addClass("sub_active").siblings("li").removeClass("sub_active");
	   		 		      if(obj[index].child){
	   		 		      	    if(level0==0){
	   		 		      	    	$(".classfy_2").remove();
	   		 		      	    }
	   		 		      	   while(level0>=level){
	  	     				  		$(".classfy_"+level0).remove();
	  	     				  		level0--;
	   		 		      	   }
	 				        appendNav1(parent,obj[index].child,data,level);
	 				        	level0=level;
	   		 		      }else{
                    while(level0>=level){
                        $(".classfy_"+level0).remove();
                        level0--;
                       }
                  }
	   		 		    /*append类型*/

	   		 		    /*append资源*/
	   		 		         var id=$(this).attr("id");
	   		 		         var t_obj=obj;
   		 		             var r=[];
   		 		             data0=[];
   		 		             findType(t_obj,index);
   		 		             console.log(data0);
                               $(".course_list").html("");
                              $.dataJson(res,"course_list",data0);
	   		 		    /*append资源*/
	        	  	 });
        	   		/*a点击切换事件*/

                    ul.append(li);
        	  }
        }
        return {"level":level,"parent":ul,"obj":obj};
  } 

/*添加类型*/

     /*查找type树*/
     		
     		
     	function findType(datas,index){
              if(datas[index].child){  
                    var len=datas[index].child.length;
                      for(var i=0;i<len;i++){
                      	findType(datas[index].child,i);
                      }
              }else{
              	  data0.push(datas[index].id);
              }
     	}


     /*查找type树*/

});




