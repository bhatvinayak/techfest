
function  menuopen(){
    document.querySelector(".menu").style="visibility:hidden";
    document.querySelector(".op1").style=" display: grid; width: 94%;text-align: center;padding:15px;font-size:2vw"
    document.querySelector(".op2").style=" display: grid; width: 94%;text-align: center;padding:15px;font-size:2vw"
    document.querySelector(".op3").style=" display: grid;width: 94%;text-align: center;padding:15px;font-size:2vw"
    document.querySelector(".op4").style=" display: grid;width: 94%;text-align: center;padding:15px;font-size:2vw"
    document.querySelector(".x").style="visibility: visible; display: grid;margin: 0px;background-color: #cc9543 !important;";
    document.querySelector(".respmenu").style="background-color: #cc9543 !important";
}
function menuclose(){
    document.querySelector(".menu").style="visibility: visible";
    document.querySelector(".op1").style="display: none";
    document.querySelector(".op2").style="display: none";
    document.querySelector(".op3").style="display: none";
    document.querySelector(".op4").style="display: none";
    document.querySelector(".x").style="visibility: hidden";
}
document.querySelector(".menu").addEventListener("onblur",menuclose);
function opencse(){
    document.querySelector(".civ").style="display: none;"
    document.querySelector(".cse").style="display: initial;background-color: #fff !important;width: 90vw;"
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
