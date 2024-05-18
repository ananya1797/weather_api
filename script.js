
document.addEventListener('DOMContentLoaded', function() {
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let city = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a02622678ffbbaa0f22489ccac0acc2&units=metric`;
    let response = await fetch(apiUrl);
    let data = await response.json(); 
    let main = data["main"];
    let wind = data["wind"];

    let popup = document.createElement("div");
    popup.classList.add("popup");
    
    let p1 = document.createElement("h4");
    let p2 = document.createElement("h4");
    let p3 = document.createElement("h4");
    let p4 = document.createElement("h4"); 
    let btn=document.createElement("button");
    btn.classList.add("btn");
    
    p1.innerText = `Temperature = ${main["temp"]}`;
    p2.innerText = `Humidity = ${main["humidity"]}`;
    p3.innerText = `Sea Level = ${main["sea_level"]} `;
    p4.innerText = `Wind speed = ${wind["speed"]}`;
    btn.innerText= `Ok`;
    
    popup.append(p1);
    popup.append(p2);
    popup.append(p3);
    popup.append(p4);
    popup.append(btn);
    document.body.appendChild(popup);

    let overlay=document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // popup.prepend(overlay);
    popup.style.display="block";
    overlay.style.display="block";

    btn.addEventListener("click", ()=> {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });

    overlay.addEventListener('click', function() {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });

    
});

let temp=document.getElementById("b1");
let humidity=document.getElementById("b2");
let wind=document.getElementById("b3");

temp.addEventListener("click", async ()=>{

    let city = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a02622678ffbbaa0f22489ccac0acc2&units=metric`;
    let response = await fetch(apiUrl);
    let data = await response.json(); 
    let main = data["main"];
    
    let popup = document.createElement("div");
    popup.classList.add("popup");
    let p=document.createElement("p");
    p.innerText=`Your temp = ${main["temp"]} \n Have a great day! `;
    let btn=document.createElement("button");
    btn.classList.add("btn");
    btn.innerText="Ok";
    popup.append(p);
    popup.append(btn);
    document.body.appendChild(popup);

    let overlay=document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // popup.prepend(overlay);
    popup.style.display="block";
    overlay.style.display="block";

    btn.addEventListener("click", ()=> {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });

    overlay.addEventListener('click', function() {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });
  
});
humidity.addEventListener("click", async ()=>{

    let city = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a02622678ffbbaa0f22489ccac0acc2&units=metric`;
    let response = await fetch(apiUrl);
    let data = await response.json(); 
    let main = data["main"];
    
    let popup = document.createElement("div");
    popup.classList.add("popup");
    let p=document.createElement("p");
    p.innerText=`Your humidity = ${main["humidity"]} \n Have a great day! `;
    let btn=document.createElement("button");
    btn.classList.add("btn");
    btn.innerText="Ok";
    popup.append(p);
    popup.append(btn);
    document.body.appendChild(popup);

    let overlay=document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // popup.prepend(overlay);
    popup.style.display="block";
    overlay.style.display="block";

    btn.addEventListener("click", ()=> {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });

    overlay.addEventListener('click', function() {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });
  
});
 
wind.addEventListener("click", async ()=>{

    let city = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a02622678ffbbaa0f22489ccac0acc2&units=metric`;
    let response = await fetch(apiUrl);
    let data = await response.json(); 
    
    let wind = data["wind"];
    let popup = document.createElement("div");
    popup.classList.add("popup");
    let p=document.createElement("p");
    p.innerText=`Your wind speed = ${wind["speed"]} \n Have a great day! `;
    let btn=document.createElement("button");
    btn.classList.add("btn");
    btn.innerText="Ok";
    popup.append(p);
    popup.append(btn);
    document.body.appendChild(popup);

    let overlay=document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // popup.prepend(overlay);
    popup.style.display="block";
    overlay.style.display="block";

    btn.addEventListener("click", ()=> {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });

    overlay.addEventListener('click', function() {
        popup.style.display="none";
        overlay.style.display="none";
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    
    });
  
});
 



 
});
