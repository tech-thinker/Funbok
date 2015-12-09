var appId="MRASIFGITHUBOPENAPPS";
var name="";
var dob="";
var sex="";

function base_init(){
	if(getCookie(appId)=="" || getCookie(appId)=="undefiened"){
		document.getElementById('login').style.position="inherit";
		document.getElementById('login').style.visibility="visible";
		document.getElementById('dashboard').style.visibility="hidden";
	}
	else{
		
		name=getCookie(appId+"NAME");
		dob=getCookie(appId+"DOB");
		sex=getCookie(appId+"SEX");
		document.getElementById('login').style.position="absolute";
		document.getElementById('login').style.visibility="hidden";
		document.getElementById('dashboard').style.visibility="visible";
		setvalueIntoTag("data-name",name);
		setvalueIntoTag("data-dob",dob);
		setvalueIntoTag("data-sex",sex);
	}
}

function setvalueIntoTag(tag,value){
	var dom=document.getElementsByTagName(tag);
	for(var i=0; i<dom.length; i++){
		dom[i].innerHTML=value;
	}
}

function login () {
	name=document.getElementById('txtName').value;	//document.getElementsByTagName('')
	dob=document.getElementById('txtDob').value;
	if(document.getElementById('txtMale').checked==true){
		sex="Male";
	}
	if(document.getElementById('txtFemale').checked==true){
		sex="Female";
	}
	
	if(name!="" && dob!="" && sex!=""){
		setCookie(appId,"1010101",3);
		setCookie(appId+"NAME",name,3);
		setCookie(appId+"DOB",dob,3);
		setCookie(appId+"SEX",sex,3);
		alert("Thank you...");
		base_init();
	}
	else{
		alert("Please fillup properly !");
	}
}

function logout(){
	unsetCookie(appId);
	unsetCookie(appId+"NAME");
	unsetCookie(appId+"DOB");
	unsetCookie(appId+"SEX");
	alert("Logout successfully !");
	base_init();
}
