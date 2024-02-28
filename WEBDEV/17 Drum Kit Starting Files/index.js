var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("i got clicked");
    } );
}
