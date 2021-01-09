const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation (){
    text.innerHTML = 'Breath In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() =>{
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        },holdTime);
    },breathTime);
}

setInterval(breathAnimation, totalTime);

function toggle(){
    const pass  = document.getElementById("pass");
    if(pass.type==="password"){
        pass.type="text";
    }else{
        pass.type="password";
    }
}