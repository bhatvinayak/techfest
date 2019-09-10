
function  menuopen(){
    document.querySelector(".menu").style="visibility:hidden";
    document.querySelector(".op1").style=" display: grid; width: 90%;text-align: center;padding:20px";
    document.querySelector(".op2").style=" display: grid; width: 90%;text-align: center;padding:20px";
    document.querySelector(".op3").style=" display: grid;width: 90%;text-align: center;padding:20px";
    document.querySelector(".op4").style=" display: grid;width: 90%;text-align: center;padding:20px";
    document.querySelector(".x").style="visibility: visible; display: grid;margin: 2vw;";
    document.querySelector(".respmenu").style="background: #FA991C;";
}
function menuclose(){
    document.querySelector(".menu").style="visibility: visible";
    document.querySelector(".op1").style="display: none";
    document.querySelector(".op2").style="display: none";
    document.querySelector(".op3").style="display: none";
    document.querySelector(".op4").style="display: none";
    document.querySelector(".x").style="visibility: hidden";
}
function opencse(){
    document.querySelector(".civ").style="display: none;"
    document.querySelector(".cse").style="display: initial;"
    document.querySelector(".mec").style="display: none;"
    document.querySelector(".ece").style="display: none;"
}
function openece(){
    document.querySelector(".cse").style="display: none;"
    document.querySelector(".ece").style="display: initial;"
    document.querySelector(".civ").style="display: none;"
    document.querySelector(".mec").style="display: none;"
}
function openciv(){
    document.querySelector(".cse").style="display: none;"
    document.querySelector(".ece").style="display: none;"
    document.querySelector(".civ").style="display: initial;"
    document.querySelector(".mec").style="display: none;"
}
function openmec(){
    document.querySelector(".cse").style="display: none;"
    document.querySelector(".civ").style="display: none;"
    document.querySelector(".ece").style="display: none;"
    document.querySelector(".mec").style="display: initial;"

}
function register()
{
    document.querySelector(".reg-form").style="display: initial;";
    document.querySelector(".reg").style="display: none";
}