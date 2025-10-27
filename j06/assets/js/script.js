// Add your JavaScript code here
b = document.getElementById("btn");
i = document.getElementById("inp");

function check () {
    if (i.value.length >= 16) {
        alert("ok")
        i.value = ""
    }
    else {
        alert("try again")
    }
}

b.addEventListener("click", check)