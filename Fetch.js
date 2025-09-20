const btn1 = document.querySelector("#btn");
btn1.addEventListener("click", fetchData);

async function fetchData(){
   const box = document.querySelector("#container");
   box.innerHTML = "Loading....";
   try{
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
       if(!response.ok) throw new Error("network is not available");
      const user = await response.json();
      box.innerHTML = ""; 
      user.forEach(i=>{
      box.innerHTML += `
      <h3>Name: ${i.name}</h3>
      <p><b>Email:</b> ${i.email}</p>
      <p><b>City:</b> ${i.address.city}</p>
      `;
      });
   }
catch(error){
box.innerHTML = `<p style="color: red;">❌ Failed to fetch users: ${error.message}</p>`;
}


};
