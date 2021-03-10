

function normal2(err,authorName){
	
	let listaN=authorName.map(variable => {
		let vari ={name:variable.name, points:variable.points.length};
		return vari;
	});
			
	$("#tabla tbody").empty();
	$("#tabla tbody").append("<tr><th>Blueprint name</th><th>Number of points</th><th>open</th></tr>");
	listaN.map(function(v){
		$("#tabla tbody").append("<tr id='name'><td>" + v.name + "</td><td id='points'>" + v.points + "</td><td><input type='button' class='btn btn-success btncalificar' value='Open'><td></tr>");
	});
	
	function getSum(total, num) {
		return total + num;
	}	
	
	let lista = [];
	listaN.map(function(s){
		lista.push(s.points);
	});
	//let lista = [1,2,3,4,5,6,7,8,9,0];
	document.getElementById("totalPoints").innerHTML = lista.reduce(getSum, 0);		
	
	
}		

function canvas(err, blueprint){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(blueprint.points[0].x,blueprint.points[0].y);
	blueprint.points.map(function(i){
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.lineTo(i.x,i.y);
		ctx.stroke();
	});
}
	
	$('#table').on('click', '.btncalificar', function(event) {
		apimock.getBlueprintsByNameAndAuthor($("#name").val(), $("#authorId").val(), canvas);
	});
	
	$(document).ready(function(){
		$("#button").click(function(){	
			apimock.getBlueprintsByAuthor($("#authorId").val(), normal2);
			
		})
	});
	
	