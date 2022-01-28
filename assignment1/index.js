let ms =0
let min =0
let sec = 0
time = false;

document.querySelector('.start').addEventListener('click',function(){
    if(time==false){
        time = true ;
        stopwatch();
    }
})

document.querySelector('.stop').addEventListener('click',function(){
    time = false;
})

document.querySelector('.reset').addEventListener('click',function(){
    time = false;
    min = 0
    sec = 0
    ms = 0
    document.querySelector('.ms').innerHTML = "00"
    document.querySelector('.sec').innerHTML = "00"
    document.querySelector('.min').innerHTML = "00"
})

function stopwatch(){
    if(time){
        ms = ms+1
        
        if(ms==99){
            sec++
            ms = 0;
        }
        
        if(sec==59){
            min++
            sec=0;
        }

        document.querySelector('.ms').innerHTML = (ms<10)?"0" + ms : ms;
        document.querySelector('.sec').innerHTML = (sec<10) ? "0" + sec : sec ;
        document.querySelector('.min').innerHTML = (min< 10) ? "0" + min : min ;
        setTimeout("stopwatch()",10);
    }
}