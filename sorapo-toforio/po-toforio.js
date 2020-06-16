var heading = document.getElementById('heading');
var degree = 0;
function mawaru(){
    degree = degree + 3;
    heading.style.transform = 'rotateX(' + degree + 'deg)';
    degree = degree % 360;
    if(0 <= degree && degree < 45){
        heading.className = 'r-1';
    }else if(45 <= degree && degree < 90){
        heading.className = 'r-2';
    }else if(90 <= degree && degree < 135){
        heading.className = 'r-3';
    }else if(135 <= degree && degree < 180){
        heading.className = 'r-4';
    }else if(180 <= degree && degree < 225){
        heading.className = 'r-5';
    }else if(225 <= degree && degree < 270){
        heading.className = 'r-6';
    }else if(270 <= degree && degree < 315){
        heading.className = 'r-7';
    }else{
        heading.className = 'r-8';
    }
}
setInterval(mawaru, 30);
var soccer = document.getElementById('soccer-ball');
var miniSoccer = document.getElementById('mini-soccer');
var click = document.getElementById('click');
var deg = 0;
var deg2= 0;
var margin = 0;
var margin2 = 0;
soccer.onclick = function(){
    setInterval(soccerBall,1);
    click.className = 'soccer-js';
};
function soccerBall(){
    if(margin < 500){
    deg = deg % 360;
    deg = deg + 3;
    soccer.style.transform = 'rotateZ(' + deg + 'deg)';
    margin += 3;
    soccer.style.marginLeft =  `${margin}px`;
    }else if((500 <= margin && margin <= 700) && (margin2 < 200)){
        deg2 = deg2 % 360;
        deg2 += 1;
        miniSoccer.style.transform = `rotateZ(${deg2}deg)`;
        margin2 += 1;
        miniSoccer.style.marginLeft =  `${margin2}px`;
    }
    else{
        return;
    }
}


    
    



