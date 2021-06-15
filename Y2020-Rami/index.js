// setting up vars for container and inside the container
const con = document.querySelector('.container'),
    video = document.querySelector('.video'),
    VC = con.querySelector('.VC'),
    Vrange = document.querySelector('#range'),
    Vvoice = document.querySelector('#voice'),
    Vplay = document.querySelector('#play'),
    Mwords = document.querySelector('.mainWords'),
    Swords = document.querySelector('.subWords');
var x = Mwords.querySelectorAll("[data-time]")

video.onloadeddata = e=>{
    Vrange.setAttribute("max", e.target.duration);
    Vrange.setAttribute('value', 0);
    Vrange.setAttribute('min', 0);
    Vrange.setAttribute('step', .0001);
};

// when the time of video is updated
video.addEventListener('timeupdate', (e)=>{
    Vrange.value = e.target.currentTime;
    if(e.target.currentTime == e.target.duration){
        Vplay.src = "stop.svg";
    }
    console.log(e.target.currentTime)
    x.forEach(el=>{
        if(Math.round(e.target.currentTime) >= 103){
            x.forEach(element => {
                element.classList.remove('active')
            });
            el.classList.add('active')
        }
        else if(Math.round(e.target.currentTime) == Math.round(el.getAttribute('data-time'))) {
                console.log(`MAth ${Math.round(e.target.currentTime)} == el ${Math.round(el.getAttribute('data-time'))}`);
                x.forEach(element => {
                    element.classList.remove('active')
                });
                el.classList.add('active')
            }
        }
        )
});


// when the value of video range changes 
Vrange.addEventListener('input', (e)=>{
    video.currentTime = e.target.value;
});

// when the value of video voice changes 
Vvoice.addEventListener('input', (e)=>{
    video.volume = e.target.value;
});



// when clicking the play btn 
Vplay.addEventListener('click', ()=>{
    if(video.paused){
        video.play();
        Vplay.src = "play.svg";
    }else{
        video.pause();
        Vplay.src = "stop.svg";
    }
});



/* function showUpMyTheWords(time){
    var x = Mwords.querySelectorAll('.mawords');
    x.forEach(element => {
        
    });
} */