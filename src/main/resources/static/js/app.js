function normal3(){
	
}

function normal2(err,authorName){
	
	var listaN=authorName.map(variable => {
				let vari ={name:variable.name, points:variable.points.length};
				return vari;
			});
			
			$("#tabla tbody").empty();
			listaN.map(function(v){
				$("#tabla tbody").append("<tr><td>" + v.name + "</td><td>" + v.points + "</td><td>" + v.points + "</td><input type='button' value='Open'></tr>");
			});
}

	$(document).ready(function(){
		
		$("#button").click(function(){	
			apimock.getBlueprintsByAuthor($("#authorId").val(), normal2);
		})
	});
		
	


	

