"use strict";
/**
 * This function store the input with id = "preference"
 * from the document in the localStorage under key="input"
 */
function storeInput(){
    let input = document.getElementById("preference").value;
    window.alert(input);
    localStorage.setItem("input", input);
  }

/**
 * This function gets the input that was stored 
 * in the local storage under key="input"
 */
function getInput(){
  var item = localStorage.getItem("input");
  return item;
}

/**
 * this function loops over each string separated by
 * a \n (newline character) and 
 * adds each into the following order: eitherTexts,
 * slashTexts, then orTexts and repeat.
 * 
 * Parameters: 
 *      eitherTexts the array that contains texts for either
 *      slashTexts  the array that contains texts for slash
 *      orTexts     the array that contains texts for or
 * 
 * Pre-conditions: 
 *      In order for this to work as it was intended, storeInput() has
 * to be called at some point before this. Otherwise, getInput() 
 * probably returns nothing or "". In this case, this function will
 * do nothing...
 */
function addElementToTheList(eitherTexts, slashTexts, orTexts){
  var stuffs = getInput().split("\n");
  if (stuffs !== undefined){
    eitherTexts = new Array();
    slashTexts = new Array();
    orTexts = new Array();
    var rotation = 0;
    stuffs.forEach(function(element){
          if (rotation == 0){
            console.log(element);
            eitherTexts.push(element);
            console.log(eitherTexts);
            ++rotation;
          }
          else if (rotation == 1){
            console.log(element);
            slashTexts.push(element);
            console.log(slashTexts);
            ++rotation;
          }
          else{
            console.log(element);
            orTexts.push(element);
            console.log(orTexts);
            rotation = 0;
          }});
    if(eitherTexts.length > orTexts.length){
      orTexts.push(eitherTexts[eitherTexts.length -1]);
      slashTexts.push(eitherTexts[eitherTexts.length -2]);
    }
    if (orTexts.length > slashTexts.length){
      slashTexts.push(orTexts[orTexts.length-1]);
    }
  }
}

