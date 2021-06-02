var mas = ["1.jpg","2.jpg","3.jpg","4.jpg"];
var i = 0;

function forward(id){
var img = document.getElementById(id);

(i == mas.length - 1) ? i = 0 : i++;

img.src = "img\\" + mas[i]; 
}

function back(id){
    var img = document.getElementById(id);
    
    (i == 0) ? i = 2 : i--;
    
    img.src = "img\\" + mas[i]; 
    }