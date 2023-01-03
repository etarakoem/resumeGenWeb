var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
var newField = document.createElement('input');
newField.setAttribute('type','text');
newField.setAttribute('name','qualification[]');
newField.setAttribute('id','qualifi');
newField.setAttribute('size',50);
newField.setAttribute('placeholder','Qualification');
survey_options.appendChild(newField);
}

remove_fields.onclick = function(){
var input_tags = survey_options.getElementsByTagName('input');
if(input_tags.length > 2) {
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
}
}
function store(){
    var name = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var linkedin = document.getElementById("linkedin").value;
    var qualifi = document.getElementById("qualifi").value;
    localStorage.setItem("fullname",name);
    localStorage.setItem("address",address);
    localStorage.setItem("phone",phone);
    localStorage.setItem("mail",mail);
    localStorage.setItem("linkedin",linkedin);
    localStorage.setItem("qualifi",qualifi);
}

function prefill(){
    document.getElementById("fname").value = localStorage.getItem("fname");
    document.getElementById("lname").value = localStorage.getItem("lname");
    document.getElementById("address").value = localStorage.getItem("address");
    document.getElementById("phone").value = localStorage.getItem("phone");
    document.getElementById("mail").value = localStorage.getItem("mail");
    document.getElementById("linkedin").value = localStorage.getItem("linkedin");
}