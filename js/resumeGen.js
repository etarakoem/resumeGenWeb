function resumeGen(){
    var name= localStorage.getItem("fname") + " " + localStorage.getItem("lname");
    document.getElementById("name").innerHTML = name;


    document.getElementById("address").innerHTML = localStorage.getItem("address");
    document.getElementById("phone").innerHTML = localStorage.getItem("phone");
    document.getElementById("mail").innerHTML = localStorage.getItem("mail");
    document.getElementById("linkedin").innerHTML = localStorage.getItem("linkedin");
}