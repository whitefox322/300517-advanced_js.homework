var form = document.forms.form;
var list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var text = this.txt.value;
    this.txt.value = "";
    var item = document.createElement("li");

    if(text !== "") {
        var span = document.createElement("span");
        span.textContent = text;
        item.appendChild(span);
        list.appendChild(item);
    }

    item.addEventListener("click", function () {
        if (item.childElementCount < 2) {
            var btn1 = document.createElement("button");
            btn1.textContent = "Modify";
            btn1.className = "btn";
            item.appendChild(btn1);

            var btn2 = document.createElement("button");
            btn2.textContent = "Remove";
            item.appendChild(btn2);
        } else {
            item.removeChild(item.lastChild);
            item.removeChild(item.lastChild);
        }

        btn1.addEventListener("click", function () {
            form.txt.value = span.textContent;
        });

        btn2.addEventListener("click", function () {
            list.removeChild(item);
        });
    });
});


