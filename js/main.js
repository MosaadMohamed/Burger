if(localStorage.getItem("maincolor") != null)
{
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("maincolor"));


    document.querySelectorAll(".colors-list li").forEach((ele) =>{

        ele.classList.remove("active");

        if(ele.dataset.color === localStorage.getItem("maincolor"))
        {
            ele.classList.add("active");
        }
    });
}


let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

searchBtn.onclick = function (){
    searchForm.classList.toggle("active");
    searchBtn.classList.toggle("fa-times");
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
}

menuBtn.onclick = function(){
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let counter = 1;

let nextbutton = document.querySelector(".content .right");

let prevbutton = document.querySelector(".content .left");

let images = document.querySelectorAll(".images img");

let divimages = document.querySelector(".images");

let bulletsul = document.querySelector(".bullets");

let bulletsli = document.querySelectorAll(".bullets li");

nextbutton.onclick = nextfun;
prevbutton.onclick = prevfun;


TheChecker();



function prevfun(){
    if(prevbutton.classList.contains("disabled"))
    {
        return false;
        
    } else{
        
        counter--;
        TheChecker();
    }
}

function nextfun(){    
    if(nextbutton.classList.contains("disabled"))
    {
        return false;


    } else{

        counter++;
        TheChecker();
    }
}



function TheChecker()
{
    images.forEach((el)=>{
        el.classList.remove("active");
    });

    bulletsli.forEach((li)=>{
        li.classList.remove("active");
    });

    divimages.children[counter -1 ].classList.add('active');

    bulletsul.children[counter - 1].classList.add("active");

    if(counter === 5)
    {
        nextbutton.classList.add("disabled");
    }else{
        nextbutton.classList.remove("disabled");
    }
    if(counter === 1)
    {
        prevbutton.classList.add("disabled");
    }else{
        prevbutton.classList.remove("disabled");
    }

}

let boxcolor = document.querySelector(".box-color");

let colorlist = document.querySelector(".colors-list");

let colorli = document.querySelectorAll(".colors-list li");

boxcolor.onclick = function(){

colorlist.classList.toggle("active");

}

colorli.forEach((el)=>{

    el.addEventListener("click", (e)=>{

    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

    window.localStorage.setItem("maincolor",e.target.dataset.color);


    handle(e);
    
});
});

function handle(ev){

    ev.target.parentElement.querySelectorAll(".active").forEach((element)=>{
    
    element.classList.remove("active");
    
    });
    
    ev.target.classList.add("active");
    
    }

    let span = document.querySelector(".up");


    window.onscroll = function()
    {
        if(window.scrollY >=1000)
        {
            span.classList.add("show");
        } else{
            span.classList.remove("show")
        }
    
    }
    
    
    span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        };

        function displayTime(){
            var dateTime = new Date();
            var hrs = dateTime.getHours();
            var min = dateTime.getMinutes();
            var sec = dateTime.getSeconds();
            var session = document.getElementById('session');
        
            if(hrs >= 12){
                session.innerHTML = 'PM';
            }else{
                session.innerHTML = 'AM';
            }
        
            if(hrs > 12){
                hrs = hrs - 12;
            }
        
            document.getElementById('hours').innerHTML = hrs;
            document.getElementById('minutes').innerHTML = min;
            document.getElementById('seconds').innerHTML = sec;
        }
        setInterval(displayTime, 10);