var Apimock = (function () {
	
	function actualizarBlueprints(authorName){
		var listaN=lista.map(function(authorName){
			this.authorName=authorName;
			this.nameBlueprints=Blueprints.nameBlueprints;
			this.points=Blueprints.points;
		});
		$("#tabla>tbody").append(
		"<tr>
			<td>${authorName}</td>
			<td>${nameBlueprints}</td>
			<td>${points}</td>
		</tr>");
	}
		
	return{
		
	}
}
)
();