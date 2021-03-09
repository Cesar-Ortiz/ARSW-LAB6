var Apimock = (function () {

	//var privateMethod = function () {}
	var authorName = document.getElementById("authorId").value;
	
	
	function Blueprints(nameBlueprints, points){
		this.nameBlueprints=nameBlueprints;
		this.points=points
	}
	
	/*function author(){
		name: "JohnConnor";
		var lista=[new blueprints("house",233),new blueprints("gear",342),new blueprints("edificio",140),new blueprints("church",400)];
	}*/
	
	lista["JohnConnor"] = {
		author: "JohnConnor", 
		blueprints : [new Blueprints("house",233),new Blueprints("gear",342),new Blueprints("edificio",140),new Blueprints("church",400)]
	};
	
	/*lista["ChrisRedfield"] = {
		author: "ChrisRedfield", 
		blueprints : [{nameBlueprints:"cabin",points: 233},{nameBlueprints:"apartament",points: 145},{nameBlueprints:"igloo",points: 135},{nameBlueprints:"hotel",points: 240}]
	};*/
		
	return{
		getBlueprintsByAuthor : function(nameAuthor, callback){
			calllback(lista[nameAuthor]);
		} 
	}
}
)
();