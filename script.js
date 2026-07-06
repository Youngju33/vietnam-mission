/* =====================================================
   2026 Vietnam Mission
   script.js V2
===================================================== */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader-wrap");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},500);

},900);

});





/* =====================================
NAVBAR
===================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.classList.add("active");

}else{

navbar.classList.remove("active");

}

});





/* =====================================
FADE ANIMATION
===================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.18
});

document.querySelectorAll(

".card,.culture-card,.tip-box,.timeline-card,.religion-card,.feature-card,.stat-card,.message-panel,.quote-content,.compare-table"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});





/* =====================================
SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(anchor.getAttribute("href"));

if(!target) return;

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

});

});





/* =====================================
ACTIVE MENU
===================================== */

const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.pageYOffset>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("current");

if(link.getAttribute("href")==="#"+current){

link.classList.add("current");

}

});

});





/* =====================================
COUNTER
===================================== */

const numbers=document.querySelectorAll(".stat-number");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let el=entry.target;

let text=el.innerText;

let target=parseFloat(text);

if(isNaN(target)) return;

let current=0;

let step=target/60;

const timer=setInterval(()=>{

current+=step;

if(current>=target){

current=target;

clearInterval(timer);

}

if(text.includes("M")){

el.innerText=current.toFixed(1)+"M";

}else if(text.includes("K")){

el.innerText=Math.floor(current)+"K";

}else if(text.includes("°")){

el.innerText=Math.floor(current)+"°C";

}else{

el.innerText=Math.floor(current);

}

},20);

counterObserver.unobserve(el);

}

});

});

numbers.forEach(el=>counterObserver.observe(el));





/* =====================================
RELIGION PERCENT
===================================== */

const religion=document.querySelectorAll(".religion-percent");

const religionObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const el=entry.target;

const txt=el.innerText;

const target=parseFloat(txt);

if(isNaN(target)) return;

let current=0;

let step=target/40;

const timer=setInterval(()=>{

current+=step;

if(current>=target){

current=target;

clearInterval(timer);

}

el.innerText=current.toFixed(1).replace(".0","")+"%";

},25);

religionObserver.unobserve(el);

}

});

});

religion.forEach(el=>religionObserver.observe(el));





/* =====================================
SCROLL ICON
===================================== */

const scroll=document.querySelector(".scroll-down");

window.addEventListener("scroll",()=>{

if(window.scrollY>250){

scroll.style.opacity="0";

}else{

scroll.style.opacity="1";

}

});





/* =====================================
HERO BUTTON
===================================== */

document.querySelectorAll(".btn-red,.btn-white").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});
function speakVN(name){

    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(name);

    const voices = speechSynthesis.getVoices();

    const vnVoice = voices.find(v => v.lang === "vi-VN");

    if(vnVoice){

        msg.voice = vnVoice;

    }

    msg.lang = "vi-VN";
    msg.rate = 0.9;
    msg.pitch = 1;

    speechSynthesis.speak(msg);

}

window.speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};

/* ==========================================
MISSION MAP
========================================== */

window.addEventListener("load", function () {

    const mapDiv = document.getElementById("missionMap");

    if (!mapDiv) return;

    const missionMap = L.map("missionMap");

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap Contributors"
    }).addTo(missionMap);

    // 📍 호치민
    const hcm = L.marker([10.8231, 106.6297])
        .addTo(missionMap)
        .bindPopup("<b>📍 호치민</b>");

    // ❤️ 빈즈엉
    const bd = L.marker([11.0653, 106.7069])
        .addTo(missionMap)
        .bindPopup("<b>❤️ 빈즈엉</b>");

        // 🏨 빈즈엉 다이아몬드 호텔
const hotel = L.marker([10.972891, 106.666140])
    .addTo(missionMap)
    .bindPopup("<b>🏨 Diamond Hotel</b><br>빈즈엉 숙소");

// 🏜️ 무이네 화이트 샌드 듄
const muine = L.marker([11.0688,108.4296])
    .addTo(missionMap)
    .bindPopup("<b>🏜️ 무이네 화이트 샌드 듄</b>");

const group = L.featureGroup([
    hcm,
    bd,
    hotel,
    muine
]);

missionMap.fitBounds(group.getBounds().pad(0.2));

});