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

// fonction pour la date/heure
$('#gmt').ready(function()
{
$('#gmt').text(Date());
})

setInterval(clock, 1000);
function clock()
{
	$('#gmt').text(Date());
}



// affichage du json
$(document).ready(function(){
	$.getJSON('rooms.json', function(data) {
    $.each(data, function(index, value) {
        $('#Room').append("<p>" +value.name+ " - " + value.room +"</p>");
    });
});
});
