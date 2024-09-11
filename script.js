var _a;
//lisitng elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experianceElement = document.getElementById('experiance');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement) {
        var name_1 = nameElement.value;
        var phone = phoneElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var experiance = experianceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong>".concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    \n    <p><strong>Phone Number :</strong>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Experiance</h3>\n    <p>").concat(experiance, "</p>\n    \n    <h3>skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
