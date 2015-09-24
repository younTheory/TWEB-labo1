// évenement lorsque on bouge la souris
$(document).mousemove(function( event ) {
	var msg = "( " + event.pageX + ", " + event.pageY + " )";
	document.getElementById("positionSouris").innerHTML = msg;
	var my_chance = new Chance();
    if (my_chance.gender() == 'Female') {
        document.getElementById('Etudiant').className = "alert alert-info";
    }
    else {
        document.getElementById('Etudiant').className = "alert alert-danger";
    }
	document.getElementById('Etudiant').innerHTML = "Hello " + my_chance.first() +" "+ my_chance.last() +" (" + my_chance.gender() +")";
});



$('#gmt').text(Date());

setInterval(clock, 1000);
function clock()
{
	$('#gmt').text(Date());
}




$(document).ready(function(){
	$.ajax({
	  dataType: "json",
	  url: "rooms.json",
	  success: function(response){
		  alert(response.Rooms + "test ");
		  for (room in response.Rooms)
		  {
			$('#Room').append("<p>" + room + "</p>");
		  }
	  }
	});	
});
