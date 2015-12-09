var appId="MRASIFGITHUBOPENAPPS";
var name="";
var dd="";
var mm="";
var yy="";
var sex="";

function base_init(){
	if(getCookie(appId)=="" || getCookie(appId)=="undefiened"){
		document.getElementById('login').style.position="inherit";
		document.getElementById('login').style.visibility="visible";
		document.getElementById('dashboard').style.position="absolute";
		document.getElementById('dashboard').style.visibility="hidden";
	}
	else{
		
		name=getCookie(appId+"NAME");
		dd=getCookie(appId+"DD");
		mm=getCookie(appId+"MM");
		yy=getCookie(appId+"YY");
		sex=getCookie(appId+"SEX");
		document.getElementById('login').style.position="absolute";
		document.getElementById('login').style.visibility="hidden";
		document.getElementById('dashboard').style.position="inherit";
		document.getElementById('dashboard').style.visibility="visible";
		setvalueIntoTag("data-name",name);
		setvalueIntoTag("data-dob",dd+"/"+mm+"/"+yy);
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
	dd=document.getElementById('dd').value;
	mm=document.getElementById('mm').value;
	yy=document.getElementById('yy').value;
	if(document.getElementById('txtMale').checked==true){
		sex="Male";
	}
	if(document.getElementById('txtFemale').checked==true){
		sex="Female";
	}
	
	if(name!="" && dd!="" && mm!="" && yy!="" && sex!=""){
		setCookie(appId,"1010101",3);
		setCookie(appId+"NAME",name,3);
		setCookie(appId+"DD",dd,3);
		setCookie(appId+"MM",mm,3);
		setCookie(appId+"YY",yy,3);
		setCookie(appId+"SEX",sex,3);
		alert("Thank you...");
		base_init();
	}
	else{
		alert("Please fillup properly !");
		document.getElementById('txtName').focus();
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
