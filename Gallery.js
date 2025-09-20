let largeImg = document.getElementById("large");
let container2 = document.getElementById("con2");


container2.addEventListener("mouseover", (e)=>{
   if(e.target.tagName === "IMG"){
       let largeSrc = e.target.getAttribute("data-large");
       largeImg.src = largeSrc;
       console.log("clicked", e.target.alt)
   }
});
