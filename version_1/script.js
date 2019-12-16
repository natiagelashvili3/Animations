var box = document.getElementById('box');

document.getElementById('box-1-color').addEventListener('click', function() {
    box.style.backgroundColor = "yellow";
    box.style.color = "blue";
});

document.getElementById('box-2-color').addEventListener('click', function() {
    box.style.backgroundColor = "blue";
    box.style.color = "red";
});

document.getElementById('box-3-color').addEventListener('click', function() {
    box.style.backgroundColor = "green";
    box.style.color = "white";
});

document.getElementById('color-reset').addEventListener('click', function() {
    box.style.backgroundColor = "black";
    box.style.color = "aqua";
});

document.getElementById('box-1-size').addEventListener('click', function() {
    box.style.width = "80px";
    box.style.height = "80px";
});

document.getElementById('box-2-size').addEventListener('click', function() {
    box.style.width = "120px";
    box.style.height = "120px";
});

document.getElementById('box-3-size').addEventListener('click', function() {
    box.style.width = "200px";
    box.style.height = "200px";
});

document.getElementById('size-reset').addEventListener('click', function() {
    box.style.width = "80px";
    box.style.height = "80px";
});