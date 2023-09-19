function clickDisplay(val)
{
    document.getElementById("screen").value+=val;

}
function clearall(){
    document.getElementById("screen").value="";
}
function equalDisplay(){
    var text=document.getElementById("screen").value;
    var value=eval(text);
    document.getElementById("screen").value=value;
}
