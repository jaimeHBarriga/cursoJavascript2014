/**
 * Created by Jaime on 7/7/2014.
 */

var defaultColor="#FF0040";

var changeColor = function(newButtonColor) {
    var buttonList=document.getElementsByTagName('button');

    if(arguments.length>0) {
        defaultColor=newButtonColor;
    }

    console.log("The new color is : "+defaultColor);
    console.log("Number of Buttons : "+buttonList.length);
    for(i=0;i<buttonList.length;i++) {
        buttonList[i].style.background=defaultColor;
    }
};
