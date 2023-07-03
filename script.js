// Initialize variables
var name = "Elise M Gunnestad";
var intro = "Software Developer";
var workHistory = [
    { title: "SafetyWing", date: "2022 - Present", description: "Dev intern for internal tools" },
    { title: "Rebel", date: "2020 - 2022", description: "Accounting and customer service" },
];

var skills = ["Java", "Python", "Problem solving"];


// Assign variables to HTML elements
document.getElementById('header-name').innerText = name;
document.getElementById('header-intro').innerText = intro;


// Populate work history
var workContainer = document.getElementById('work-container');
workHistory.forEach(function(job) {
    var jobElement = document.createElement('div');

    var titleElement = document.createElement('h3');
    titleElement.innerText = job.title;
    jobElement.appendChild(titleElement);

    var dateElement = document.createElement('h4');
    dateElement.innerText = job.date;
    jobElement.appendChild(dateElement);

    var descriptionElement = document.createElement('p');
    descriptionElement.innerText = job.description;
    jobElement.appendChild(descriptionElement);

    workContainer.appendChild(jobElement);
});


// Populate skills
var skillsContainer = document.getElementById('skills-container');
skills.forEach(function(skill) {
    var skillElement = document.createElement('p');
    skillElement.innerText = skill;
    skillsContainer.appendChild(skillElement);
});
