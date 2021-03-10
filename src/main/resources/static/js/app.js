var app = (function () {
		
	return{
		function actualizarBlueprints(author){
			var listaN=author.map(function(){
				this.name=name;
				this.points=points;
			});
			$("#tabla tbody").empty();
			listaN.forEach(function(name, point){
				$("#tabla tbody").append("<tr><td>${name}</td><td>${points}</td><td>${points}</td><input type='button' value='Open'></tr>");
			});
			
		}
	}
}
)
();

getBlueprintsByAuthor("LexLuthor", actualizarBlueprints);