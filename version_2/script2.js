var main_box = document.getElementById("div-box")
var buttons = document.getElementsByClassName("color-btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var backColor = buttons[i].getAttribute("data-bg");
        var color = buttons[i].getAttribute("data-color");
        main_box.style.backgroundColor = backColor;
        main_box.style.color = color;
    });
}





