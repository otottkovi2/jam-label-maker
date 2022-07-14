function werk() {
const title = document.querySelector("#labelTitle").value;
let n = parseInt(document.getElementById("amount").value);
const main = document.querySelector("main");
if (title == "") {
    alert("A cím mező üres!");
    return;
}
if (isNaN(n)) {
    alert("A szám nem megfelelő/üres! Egy címke lesz készítve.");
    n = 1;
}
main.replaceChildren("");
function createLabel(title){
    let element = document.createElement("div");
    element.append(title,document.createElement("br"),new Date().getFullYear());
    main.append(element);
}

do{
createLabel(title);
n--;
}while(n > 0)
}
