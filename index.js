var freshmen=5;
var sophomores=5;
var juniors=5;
var seniors=5;
function addpoints(){

}
function validate(){
	var name= $("#name").val();
	var message= $("#message").val();

	if(name==""){
		missing.push("name");
	}
	if(message==""){
		missing.push("message");
	}
	if(missing.length>0){
		$("#error").html("You are missing: " + missing);
		$("#error").css("color", "red");
	}
	
}
