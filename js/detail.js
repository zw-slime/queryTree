$(function(){
	   var res=eval(resource.res);  /*资源*/ 
    		res = json;
    		var thisURL = document.URL;    
  		var  getval =thisURL.split('?')[1];  
  		var id=parseInt(getval.split("=")[1]);  

  		$("#course_img").prop("src",res[(id-1)].pic);
      $("#course_a").prop("href",res[(id-1)].src);
  		
  		

  		var arry=["school","name","subject","content1","funPoint"];
  		var arrys=["授课学校","授课老师","科目","内容","功能点"];
  		$(".con-text>ul>li").each(function(index){
  			$(this).text($(this).text()+arrys[index]+"："+res[(id-1)][arry[index]]);
  		});	

  		$(".content2>p").html(res[(id-1)].content);	
 	
});



