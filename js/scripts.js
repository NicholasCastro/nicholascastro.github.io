$(document).ready(function() {
	$('.parallax').parallax();
	$('.slider').slider();

	var home = 1;
	var bio = 0;
	var projects = 0;
	var skills = 0;
	var social = 0;

	$('#bio').hide();
	$('#projects').hide();
	$('#skills').hide();
	$('#sociallinks').hide();

	//Home Functions

	function leavehome(){
		$("#home").removeClass("animated fadeInRight")
		$("#home").addClass("animated fadeOutLeft");
	}

	function hidehome(){
		$("#home").hide();
	}

	function showhome(){
		$("#home").removeClass("animated fadeOutLeft")
		$("#home").show();
		$("#home").addClass("animated fadeInRight")
	}

	function changehome(){
		if(bio === 1){
			bio = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavebio();
			setTimeout(hidebio, 1000);
			setTimeout(showhome, 1001);
		}
		if(projects === 1){
			projects = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveprojects();
			setTimeout(hideprojects, 1000);
			setTimeout(showhome, 1001);
		}
		if(skills === 1){
			skills = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveskills();
			setTimeout(hideskills, 1000);
			setTimeout(showhome, 1001);
		}
		if(social === 1){
			social = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavesocial();
			setTimeout(hidesocial, 1000);
			setTimeout(showhome, 1001);
		}
	}

	//Bio Functions

	function leavebio(){
		$("#bio").removeClass("fadeInRight")
		$("#bio").addClass("animated fadeOutLeft");
	}

	function hidebio(){
		$("#bio").hide();
	}

	function showbio(){
		$("#bio").removeClass("animated fadeOutLeft")
		$("#bio").show();
		$("#bio").addClass("animated fadeInRight")
	}

	function changebio(){
		if(home === 1){
			home = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavehome();
			setTimeout(hidehome, 1000);
			setTimeout(showbio, 1001);
		}
		if(projects === 1){
			projects = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveprojects();
			setTimeout(hideprojects, 1000);
			setTimeout(showbio, 1001);
		}
		if(skills === 1){
			skills = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveskills();
			setTimeout(hideskills, 1000);
			setTimeout(showbio, 1001);
		}
		if(social === 1){
			social = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavesocial();
			setTimeout(hidesocial, 1000);
			setTimeout(showbio, 1001);
		}
	}

	
	//Project functions

	function leaveprojects(){
		$("#projects").removeClass("animated fadeInRight")
		$("#projects").addClass("animated fadeOutLeft");
	}

	function hideprojects(){
		$("#projects").hide();
	}

	function showprojects(){
		$("#projects").removeClass("animated fadeOutLeft")
		$("#projects").show();
		$("#projects").addClass("animated fadeInRight")
	}

	function changeprojects(){
		if(bio === 1){
			bio = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavebio();
			setTimeout(hidebio, 1000);
			setTimeout(showprojects, 1001);
		}
		if(home === 1){
			home = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavehome();
			setTimeout(hidehome, 1000);
			setTimeout(showprojects, 1001);
		}
		if(skills === 1){
			skills = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveskills();
			setTimeout(hideskills, 1000);
			setTimeout(showprojects, 1001);
		}
		if(social === 1){
			ssocial = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavesocial();
			setTimeout(hidesocial, 1000);
			setTimeout(showprojects, 1001);
		}
	}

	//Skills functions

	function leaveskills(){
		$("#skills").removeClass("animated fadeInRight")
		$("#skills").addClass("animated fadeOutLeft");
	}

	function hideskills(){
		$("#skills").hide();
	}

	function showskills(){
		$("#skills").removeClass("animated fadeOutLeft")
		$("#skills").show();
		$("#skills").addClass("animated fadeInRight")
	}

function changeskills(){
		if(bio === 1){
			bio = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavebio();
			setTimeout(hidebio, 1000);
			setTimeout(showskills, 1001);
		}
		if(home === 1){
			home = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavehome();
			setTimeout(hidehome, 1000);
			setTimeout(showskills, 1001);
		}
		if(projects === 1){
			projects = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveprojects();
			setTimeout(hideprojects, 1000);
			setTimeout(showskills, 1001);
		}
		if(social === 1){
			social = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavesocial();
			setTimeout(hidesocial, 1000);
			setTimeout(showskills, 1001);
		}
	}
	

	//Social functions

	function leavesocial(){
		$("#sociallinks").removeClass("animated fadeInRight")
		$("#sociallinks").addClass("animated fadeOutLeft");
	}

	function hidesocial(){
		$("#sociallinks").hide();
	}

	function showsocial(){
		$("#sociallinks").removeClass("animated fadeOutLeft")
		$("#sociallinks").show();
		$("#sociallinks").addClass("animated fadeInRight")
	}


	function changesocial(){
		if(bio === 1){
			bio = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavebio();
			setTimeout(hidebio, 1000);
			setTimeout(showsocial, 1001);
		}
		if(home === 1){
			home = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leavehome();
			setTimeout(hidehome, 1000);
			setTimeout(showsocial, 1001);
		}
		if(projects === 1){
			projects = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveprojects();
			setTimeout(hideprojects, 1000);
			setTimeout(showsocial, 1001);
		}
		if(skills === 1){
			skills = 0;
			console.log("bio =" + bio);
			console.log("home =" + home);
			console.log("projects =" + projects);
			console.log("skills =" + skills);
			console.log("social =" + social);
			leaveskills();
			setTimeout(hideskills, 1000);
			setTimeout(showsocial, 1001);
		}
	}

	

	//Buttons scripts
	$('#bio-btn').on("click", function() {
		if(bio === 0){
			bio = 1;
			changebio();
		}
	})

	$('#home-btn').on("click", function() {
		if(home === 0){
			home = 1;
			changehome();
		}
	})

	$('#skills-btn').on("click", function() {
		if(skills === 0){
			skills = 1;
			changeskills();
		}
	})

	$('#projects-btn').on("click", function() {
		if(projects === 0){
			projects = 1;
			changeprojects();
		}
	})

	$('#social-btn').on("click", function() {
		if(social === 0){
			social = 1;
			changesocial();
		}
	})
});