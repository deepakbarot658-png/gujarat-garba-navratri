const songs=[
 {title:"Tara Vina Shyam",artist:"Traditional Garba",emoji:"🪔"},
 {title:"Dholida Dhol Re Vagad",artist:"Garba Classics",emoji:"🥁"},
 {title:"Sanedo",artist:"Gujarati Folk",emoji:"💃"},
 {title:"Chogada",artist:"Navratri Favourite",emoji:"✨"},
 {title:"Pankhida Tu Udi Jaje",artist:"Traditional",emoji:"🦚"},
 {title:"Kesariya Rang",artist:"Garba Beats",emoji:"🌸"}
];

const songGrid=document.getElementById("songGrid");
let current=null;
function renderSongs(){
 songGrid.innerHTML=songs.map((s,i)=>`
 <article class="song"><div class="cover">${s.emoji}</div><div><h3>${s.title}</h3><p>${s.artist}</p></div>
 <button class="play" data-i="${i}" aria-label="Play ${s.title}">▶</button></article>`).join("");
 document.querySelectorAll(".play").forEach(b=>b.onclick=()=>toggleSong(+b.dataset.i,b));
}
function toggleSong(i,btn){
 document.querySelectorAll(".play").forEach(x=>{x.classList.remove("playing");x.textContent="▶"});
 if(current===i){current=null;return}
 current=i;btn.classList.add("playing");btn.textContent="❚❚";
 alert("Demo player: add your licensed MP3 files in script.js to enable real audio playback.");
}
renderSongs();

document.getElementById("shuffleBtn").onclick=()=>{songs.sort(()=>Math.random()-.5);renderSongs()};
document.getElementById("menuBtn").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));

const lightbox=document.getElementById("lightbox"), lightboxImg=document.getElementById("lightboxImg");
document.querySelectorAll(".gallery img").forEach(img=>img.onclick=()=>{lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false")});
function closeBox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true")}
document.getElementById("closeLightbox").onclick=closeBox;
lightbox.onclick=e=>{if(e.target===lightbox)closeBox()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeBox()});
document.getElementById("allPhotos").onclick=()=>document.getElementById("photos").scrollIntoView({behavior:"smooth"});
