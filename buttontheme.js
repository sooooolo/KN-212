let switchern = document.getElementById("themenight");
let switcherd = document.getElementById("themeday");

function change() {
	document.getElementById("themenight").style.display="none";
    document.getElementById("themeday").style.display="initial";
   	let bodysect=document.getElementById('body');
	bodysect.style.backgroundColor="#0d0a0a";
	let i;
	let menu=bodysect.getElementsByClassName('nav_link');
	for(i=0; i<menu.length; i++){
		menu[i].style.color="#0d0a0a";
	}
	document.getElementById('bar').style.backgroundColor="#f0e7c5";
	document.getElementById('drop').style.backgroundColor="#f0e7c5";
	document.getElementById('wallpaper').style.background="rgba(0, 0, 0, 0) url('nights.jpg')scroll  0% 0%";	
	document.getElementById('title').style.background="rgb(240, 231, 197,0.5) ";
	document.getElementById('title').style.color="#0d0a0a";
	document.getElementById('booking').style.backgroundColor="#f0e7c5";
	document.getElementById('buttoncheck').style.backgroundColor="#0d0a0a";
	document.getElementById('business').style.color="#0d0a0a";
	let servtitle=bodysect.getElementsByClassName('serv_title');
	let servtext=bodysect.getElementsByClassName('serv_text');
	let sectheader=bodysect.getElementsByClassName('section_header bla');
	let footercont=bodysect.getElementsByClassName('footer_text');
	let footerhead=bodysect.getElementsByClassName('footer_header');
	let footersoc=bodysect.getElementsByClassName('social_header');
	for(i=0; i<servtitle.length; i++){
		servtitle[i].style.color="#f0e7c5";
	}
	for(i=0; i<servtext.length; i++){
		servtext[i].style.color="#f0e7c5";
	}
	for(i=0; i<sectheader.length; i++){
		sectheader[i].style.color="#f0e7c5";
	}
	for(i=0; i<footercont.length; i++){
		footercont[i].style.color="#0d0a0a";
	}
	for(i=0; i<footerhead.length; i++){
		footerhead[i].style.color="#0d0a0a";
	}
	for(i=0; i<footersoc.length; i++){
		footersoc[i].style.color="#0d0a0a";
	}
	document.getElementById('serv_section').style.backgroundColor="#0d0a0a";
	document.getElementById('restaurant').style.backgroundColor="#0d0a0a";
	document.getElementById('attract').style.backgroundColor="#0d0a0a";
	document.getElementById('inner-footer').style.backgroundColor="#f0e7c5";
}
function changeday() {
	document.getElementById("themeday").style.display="none";
	document.getElementById("themenight").style.display="initial";
	let bodysect=document.getElementById('body');
	bodysect.style.backgroundColor="#fff";
	document.getElementById('bar').style.backgroundColor="#0d0a0a";
	document.getElementById('drop').style.backgroundColor="#f1f1f1";
	let i;
	let menu=bodysect.getElementsByClassName('nav_link');
	for(i=0; i<menu.length; i++){
		menu[i].style.color="#fff";
	}
	document.getElementById('wallpaper').style.background="rgba(0, 0, 0, 0) url('resort.jpg') scroll  0% 0%";	
	document.getElementById('title').style.background="rgb(54, 51, 47, 0.5) ";
	document.getElementById('title').style.color="#f0e7c5";
	document.getElementById('booking').style.backgroundColor="#0d0a0a";
	document.getElementById('buttoncheck').style.backgroundColor="#4CAF50";
	document.getElementById('business').style.color="white";
	let servtitle=bodysect.getElementsByClassName('serv_title');
	let servtext=bodysect.getElementsByClassName('serv_text');
	let sectheader=bodysect.getElementsByClassName('section_header bla');
	let footercont=bodysect.getElementsByClassName('footer_text');
	let footerhead=bodysect.getElementsByClassName('footer_header');
	let footersoc=bodysect.getElementsByClassName('social_header');
	for(i=0; i<servtitle.length; i++){
		servtitle[i].style.color="#333";
	}
	for(i=0; i<servtext.length; i++){
		servtext[i].style.color="#333";
	}
	for(i=0; i<sectheader.length; i++){
		sectheader[i].style.color="black";
	}
	for(i=0; i<footercont.length; i++){
		footercont[i].style.color="#ffff";
	}
	for(i=0; i<footerhead.length; i++){
		footerhead[i].style.color="#ffcc66";
	}
	for(i=0; i<footersoc.length; i++){
		footersoc[i].style.color="#ffff";
	}
	document.getElementById('serv_section').style.backgroundColor="#ffff";
	document.getElementById('restaurant').style.backgroundColor="#ffff";
	document.getElementById('attract').style.backgroundColor="#ffff";
	document.getElementById('inner-footer').style.backgroundColor="#0d0a0a";
}
