
const music=document.querySelector("audio");
const img =document.querySelector("img");
const play=document.getElementById("play");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const songs=[
{
    name:"swag1",
    title:"Giorno Giovana .exe",
    artist:"Yugo Kanno",
    bground:"bg1"
},
{
    name:"swag2",
    title:"Pillar Men Theme",
    artist:"jjba",
    bground:"bg2"
},
{
    name:"swag3",
    title:"Bloody Stream",
    artist:"Kazuso Oda",
    bground:"bg3"
},
{
    name:"swag4",
    title:"Shape of you",
    artist:"Ed Sheeran",
    bground:"bg4"
},
{
    name:"swag5",
    title:"Sunflower",
    artist:"Post Malone",
    bground:"bg5"
}
]
isPlaying=false;

const playMusic = () => {
    isPlaying=true;
    if (isPlaying) music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
const pauseMusic = () => {
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click",() => {
    if (isPlaying) {
    pauseMusic();
    } else{
        playMusic();
    }
});
///music change
    const loadMusic= (songs)=>{
        title.textContent=songs.title;
        artist.textContent=songs.artist;
        music.src="music/" +songs.name+".mp3";
        img.src= "image/" +songs.name+".jpg";
        document.body.style.backgroundImage = `url("image/${songs.bground}.gif")`;
    };
    songIndex =0; 
    const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadMusic(songs[songIndex]);
    if(isPlaying) music.play();
    
    }
    const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadMusic(songs[songIndex]);
    if(isPlaying){
        play.classList.replace("fa-pause","fa-play");
        img.classList.remove("anime");
        img.classList.remove("rotpla");
        if(isPlaying) {
            music.play();
            playMusic();
        }
    }
    }
    next.addEventListener("click",nextSong);
    prev.addEventListener("click",prevSong);


setTimeout(()=> {
    document.getElementsByClassName('loading-page')[0].classList.remove('loading-page');
    document.body.style.backgroundImage = `url("image/bg1.gif")`;
    isPlaying? pauseMusic():playMusic();
}, 3500);


    