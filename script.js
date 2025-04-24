
function themsChange(){
    document.getElementById("container").style.backgroundColor='black';
    document.getElementById("container").style.color='white';
}

function changecText(element){
    element.innerHTML='Welcome to my Website'
}

function displayTime(){
    document.getElementById("time").innerHTML= Date();

}

function checkCookies(){
    let text="";
    if(
        navigator.cookieEnabled == true){
            text='Cookies are enabled'
        } else{
            text='Cookies are not enabled'
        }
        document.getElementById("demo").innerHTML= text;
        document.getElementById("demo").style.color='red'
    }