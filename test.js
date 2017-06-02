var elem = document.getElementById('join-us-content');
var children = elem.children;

for (var i = 0; i < children.length; i++) {
    console.log(children[i].className);
}

function leftAlert() {
    alert('Left');
}

function joinUsAlert(){
    alert('Button Join Us');
}

function joinUsButtonClick(event) {
    event.target.style.backgroundColor = "#dddddd";
}