const head = document.getElementById("hello");
const btton = document.getElementById("btn");


btton.addEventListener("click", function() {
 if (head.textContent == "Hello World!") {
   head.textContent = "Hello JavaScript DOM";
   document.body.style.backgroundImage ="url('https://i.pinimg.com/originals/ba/97/10/ba9710ca2c65ef7bc4318c9d857d9f1f.gif')";
   document.body.style.backgroundSize ="cover";
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundPosition ="center"
   btton.style.backgroundColor = "white";
   btton.style.color = "black";


 } else {
   head.textContent = "Hello World!";
   head.style.color = "white";
   head.style.backgroundColor = "blue";
   document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/25/ed/7d/25ed7ddeae36fdc5d67a38aaf458fefa.gif')";
   document.body.style.backgroundSize = "cover";
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundPosition = "center";
   btton.style.backgroundColor = "black";
   btton.style.color = "white";


 }
});
