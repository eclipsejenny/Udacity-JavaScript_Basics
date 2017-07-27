/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Yuji Qiu", 
	"role": "Becoming Web Developer",
	"contacts": {
		"mobile": "613-276-3606",
		"email": "yqiu35@gmail.com",
		"github": "eclipsejenny",
		"location": "Ottawa"
	},
	"welcomeMessage": "Welcome to contact me!",
	"skills": [
		"Python", 
		"JavaScript",
		"Data science"
	],
	"bioPic": "images/fry.jpg",
	"display": function(){

		//HTMLheaderName, HTMLheaderRole
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		//HTMLcontactGeneric, HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLblog, HTMLlocation
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

		//#footerContacts
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

		//HTMLbioPic, HTMLwelcomeMsg
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		
		//HTMLskillsStart, HTMLskills
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Epiphan Systems Inc.",
			"title": "Junior Quality Assurance Engineer",
			"location": "Ottawa",
			"dates": "2016.9 - 2017.4",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			"employer": "University of Ottawa",
			"title": "Teaching Assistant",
			"location": "Ottawa",
			"dates": "2016.1 - 2016.4",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}
	],
	"display": function(){

		//HTMLworkStart, HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
};

var project = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		}
	],
	"display": function(){

		//HTMLprojectStart, HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage
		for (index in project.projects) {
			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.projects[index].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.projects[index].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.projects[index].description));
			for (image in project.projects[index].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.projects[index].images[image]));
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of Ottawa",
			"location": "Ottawa",
			"degree": "Master",
			"majors": "Electrical and computer engineering",
			"dates": 2016,
			"url": "https://www.uottawa.ca/en"
		},
		{
			"name": "Harbin Engineering University",
			"location": "Harbin",
			"degree": "Bachelor",
			"majors": "Electrical engineering",
			"dates": 2014,
			"url": "www.hrbeu.edu.cn/"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": 2017,
			"url": "http://www.udacity.com/"
		}
	],
	"display": function(){

		//HTMLschoolStart, HTMLschoolName, HTMLschoolDegree, HTMLschoolDates, HTMLschoolLocation, HTMLschoolMajor
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
		}

		//HTMLonlineClasses, HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineURL
		for (onlineCourse in education.onlineCourses) {
			$(".education-entry:last").append(HTMLonlineClasses);

			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
		}
	}
};

/* or encapsulate this way:
project.display = function() {
	for (index in project.projects) {
		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.projects[index].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.projects[index].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.projects[index].description));
		for (image in project.projects[index].images) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.projects[index].images[image]));
		}
	}
}
*/

project.display();
bio.display();
work.display();
education.display();


//internationalizeButton
$("#main").append(internationalizeButton);

function inName(originalName) {
	var firstName = originalName.split(" ")[0]
	var lastName = originalName.split(" ")[1]

	var finalName = "";

	firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
	lastName = lastName.toUpperCase();

	finalName = firstName + " " + lastName;

	return finalName;
}

//googleMap
$("#mapDiv").append(googleMap);




