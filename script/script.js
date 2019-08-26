function  menuopen(){
    document.querySelector(".menu").style="visibility:hidden";
    document.querySelector(".op1").style=" display: grid; width: 90%;text-align: center;padding:20px";
    document.querySelector(".op2").style=" display: grid; width: 90%;text-align: center;padding:20px";
    document.querySelector(".op3").style=" display: grid;width: 90%;text-align: center;padding:20px";
    document.querySelector(".x").style="visibility: visible; display: grid;";
    document.querySelector(".respmenu").style="background: rgb(219, 160, 32);";
}
function menuclose(){
    document.querySelector(".menu").style="visibility: visible";
    document.querySelector(".op1").style="display: none";
    document.querySelector(".op2").style="display: none";
    document.querySelector(".op3").style="display: none";
    document.querySelector(".x").style="visibility: hidden";
}
function opencse(){
    document.querySelector(".cse").style="display: initial;"
}
function register()
{
    document.querySelector(".reg-form").style="display: initial;";
    document.querySelector(".reg").style="display: none";
}