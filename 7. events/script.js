//add onclick="funcName()"  attribute to html element
//oneclick is an event and the function will execute if user click on this element
function funcName(){
    alert("you clicked the button");
}

//better way to use events directly in javascript
let theElem = document.querySelector('.btn');
theElem.addEventListener('click',funcName);
//here onclick becomes click
/* or with function expression

theElem.addEventListener('click',function(){
        alert("you clicked the button");

});
*/



//events
/*
    
    other events:

    onkeypress //just keys that are charachters or numbers
    onkeydown  // almost all keys
    onkeyup    
    
    focus  //when an input are clicked and active
    blur   //when we get out of an input

    onclick
    ondblclick  //when double click on an element

    onchange    //when value of an element changes
    
*/