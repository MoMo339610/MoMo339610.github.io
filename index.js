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