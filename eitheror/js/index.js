"use strict";

//All of the variables from the document
let either = document.querySelector("#either");
let slash = document.querySelector("#slash");
let or = document.querySelector("#or");
let app = document.querySelector("#app");
let mediaButton = document.querySelector("#play");
let audio = document.querySelector("audio");

//Arrays for the different lexia/texts
let eitherTexts = [
  "Brown. Brown, brown. Nike sneakers, jeans, fourth floor libraries. My mom's cooking, always better than Thali. Tell me what to do. Computer science, bhangra, business management, dollar stores. We are together, stay. Jazba. Shake hands with a sweaty handshake. Sweat across a cross cut forehead. Katrina Kaif teaches me about my Instagram captions, and life choices. Tell me your name.",
  "I replace my bedsheets twice a week, never gets rid of the smell. Condoms are fifteen at BJ's, that's 38 cents a fuck. I took you to Movies 10, we saw Moana and I laughed when that large dude screamed ya welcome. We performed Redbone at an open mic, I played the Cajon you played guitar. Your fingers are long, longer than my exes. My cock feels good when you use your teeth. I stopped taking my antidepressants, thank you.",
  "I take the early bus, show up early to Multi-variable Calculus. Take notes, raise my hand when I can't solve an integral. I tell the boy behind me to be quiet. He has a nose piercing, I have a mechanical pencil. I stay up till 2AM daily, libraries, office hours, Sparknotes. My professor doesn't know my name, I'm cursive in inky blue ink. I get a job at Oracle and my dad hugs me. We take pictures in Lexuses and post them to Facebook, captioned with Drake lyrics.",
  "The gym attendant knows my first name. We wave, she's cute. I text group conversations that I'm working out. They send fire emojis. I measure my calorie intake with my phone. Eggos are too much but sometimes I'll sneak one in. Fuck Splenda, it gives you cancer. Running 5ks without an inhaler. I keep water in my fridge, carry a coffee thermos around. Use chapstick, eat pretzel sticks. Tank tops, chest bumps, flexing in the mirror. Crying to G-Eazy songs and laughing at dat boi memes.",
  "Sundays at 10. Stations of the Cross. Luke 6:32-36. Matthew 6:34. Our Father, who art in heaven, the lord is with thee, heaven art thou amongst to the father, to the son, and to the holy spirit, as it was in the beginning, under pontius pilate, suffered death and was buried, on the third day rose again. Put a rosary on my rear view mirror. Convince people God is always there, except in Stephen Hawking's death he deserved it. Share Jesus memes on Facebook and get love reactions."
]
let slashTexts = [
  "We stopped going to Church after they made fun of my mom's sari. Christmas means a tree, face ornaments, presents, pajamas. Graduation parties, my ex performed a bhangra routine and we all clapped. Sometimes I Google myself. My mousepad is from Harvard. My girlfriend is from K-Mart. My cigarettes are from a gas station. My hands are from Australia. My feet from Nashua. Bite me.",
  "I want you. I think. We hold hands on ice rinks, my skates wobble yours glide. I tell my mom about you, I think. Maybe it was someone else. I answer booty calls, you don't know about those. You make out with drunks on weekends, I don't care. We got high one time and I read your poetry, about your dad and college applications. Will we stay or forget us and how long? Longer? I'll be ok, you'll be ok too.",
  "I play drums, guitar, piano, vibraphones, and bass. Paying attention in Music Theory class, following modal mixture and suspended chords. Sometimes on time, sometimes not there. Lazy days, productivity. I watch VSauce videos. Take notes when the teacher doesn't look at the students, trailing off. Sleeping in class, feet up on the desk like Kanye West. My record label fails. I get a degree and tell my office friends I sing. We laugh. Fax machines, abacuses, turntables, coffee.",
  "Walk to class sometimes. Eat a sandwich sometimes. Skip lunch. Skip dinner. Sleep more than 12 hours a day. Trace the valleys on the toilet, let them fathom you. Sit down during the gospel. Wandering eyes wandering thighs wandering thoughts around if Skittles or Vitamin Water is better. Smoker's cough. Your girlfriend says you look beautiful so she has to be a liar. She'll probably cheat in a few months. Pass the time with solitaire or fortnite. Smile and laugh often.",
  "Hold hands with my mom during the our father. Genuflect to leave the pew. Buy McDonald's because it's cheap, even though child labor isn't. Lie in confession. Talk about palm Sunday and ditch. Celebrate Easter with your girlfriend's family just because. Stare at a tabernacle sometimes. Stare at that wound on Jesus's ribs sometimes. Stare at your little brother and wonder if it's free will that he loves you or predestination sometimes. Stare at the cigarette butt after you toss it in a puddle sometimes."
]
let orTexts = [
  "White. McDonald's and long fingernails. Stella Artois, Brad Pitt liked it in Ocean's Thirteen (that was the worst one). I stood in line for Niagra Falls for four hours, the boat was cold. Acid or LSD? Those Original Crispy Chicken Sandwich's from Wendy's used to be three dollars. They took down my church to put up a Friendly's. Guitars and piano, chords and tabs, Adele and Frank Zappa. Let me go.",
  "You're fucking some other dude. Laughing about how often I fixed my hair. Repeating jokes, inside like Timbaland's Carry Out. Do you masturbate to me? Like once? John Barr, Everclear, jungle juice. Blind me until I'm high again. Eviscerate me like the Tinder whore you are. Tobias Jesso Jr. Keaton Henson. Bon Iver. Weed. I picked up guitar because the frets hurt my fingers, that pain was like cutting and I stopped cutting my hair. Let me bleed out.",
  "Running away, some bus some Air BnB. I can play bar chords and metaphors about paper kites. Probably late. My dad puts money in my bank account every Sunday, fifty, hundred, sends a text and I feel bad. I write about him, how he hits me, how he texts me. People publish me, slam poetry and open mics. LSD. Unshaven, profanity and laughter. My Snapchat streaks go on. My TEDx talk goes viral. I'm unemployed and shut in, condom wrappers and sticky notes on carpet.",
  "Meatball sandwiches, Dominos pizza. Dairy Queen blizzards, frozen yogurt with bobas and graham cracker bits. Sometimes I stop in between flights of stairs. I avoid my mirror, wash my hands without looking up. Start wearing xl shirts, they're comfy. Watch YouTube videos and skip class if the bus is a minute away, you missed it. Wear Vans. Make jokes about HiGi machines and laugh to your friends at white people.",
  "Taco Bell on Good Friday. Sex. Gay marriage. I sit on my windowsill and count stars, focus on their grace, their form. Wear a tux to a funeral, give my respects, shake the hands of aunts, leave. Roll my eyes at tweets about the gospel or dharma or samara. Start arguments with priests, tell them your confused about salvation when Christianity isn't even the most popular religion in the world; does everyone else perish because they got it wrong? God only knows."
]

/**
 * This function store the input with id = "preference"
 * from the document in the localStorage under key="input"
 */
function storeInput(){
  let input = document.getElementById("preference").value;
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
* Pre-conditions: 
*      In order for this to work as it was intended, storeInput() has
* to be called at some point before this. Otherwise, getInput() 
* probably returns nothing or "". In this case, this function will
* do nothing...
*
* Post-conditions:
*      In order for this to function, the user inputs are stored
* in the local storage. If there is a better way to do this, plz help.
*/
function addElementToTheList(){
  var stuffs = getInput().split("\n");
  console.log(stuffs);
  if (stuffs != undefined){
    eitherTexts = new Array();
    slashTexts = new Array();
    orTexts = new Array();
    var rotation = 0;
    stuffs.forEach(function(element){
        if (rotation == 0){
          eitherTexts.push(element);
          ++rotation;
        }
        else if (rotation == 1){
          slashTexts.push(element);
          ++rotation;
        }
        else{
          orTexts.push(element);
          rotation = 0;
        }});
    if(eitherTexts.length > slashTexts.length){
      slashTexts.push(eitherTexts[eitherTexts.length -1]);
      orTexts.push(eitherTexts[eitherTexts.length -1]);
   }
    else if (orTexts.length < slashTexts.length){
      orTexts.push(slashTexts[orTexts.length-1]);
    }
  }
}
addElementToTheList();

//An array of all the arrays of texts
let allTexts = [eitherTexts, slashTexts, orTexts];
//Array of possible starting words
let choice = ["either", "/", "or", "neither"];
//Array of colors for background
let posColors = ["#FF3B3F", "#0375B4", "#F7B733","#CAEBF2", "#A239CA"];
//Random topic/color value
let topic = Math.floor(Math.random() * eitherTexts.length);

let toggle = false;

tick();

//The play/pause button. Linked to the soundToggle function on a click
mediaButton.isPlaying = true;
mediaButton.addEventListener("click", soundToggle);
mediaButton.addEventListener("touchend", soundToggle);

either.myArray = eitherTexts;
either.init = 0;

slash.myArray = slashTexts;
slash.init = 1;

or.myArray = orTexts;
or.init = 2;

//Set the functions to the app words and initialize the first choice
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
  either.addEventListener("touchend", getPhrase);
  slash.addEventListener("touchend", getPhrase);
  or.addEventListener("touchend", getPhrase);
  mediaButton.isPlaying = false;
  audio.pause();
}
else
{
  either.addEventListener("mouseover", getPhrase);
  either.addEventListener("mouseleave", reset);
  either.addEventListener("click", swap);

  slash.addEventListener("mouseover", getPhrase);
  slash.addEventListener("mouseleave", reset);
  slash.addEventListener("click", swap);

  or.addEventListener("mouseover", getPhrase);
  or.addEventListener("mouseleave", reset);
  or.addEventListener("click", swap);
}

//A ticking function to pass the time and cycle through the topics
function tick()
{
  setTimeout(tick,50000);
  topic++;
  if(topic >= eitherTexts.length)
  {
    topic = 0;
  }

  //Change the background color depending on the topic
  app.style.backgroundColor = posColors[topic];
}

//Gets a new lexia based off the current topic. Displays it in the hovered word
function getPhrase()
{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
  {
    this.style.fontSize = "12px";
    toggle = !toggle;
  }
  else
  {
    //Styles for legibility
    this.style.fontSize = "30px";
    this.style.cursor = "crosshair";
  }

  //The neither term does not have any associated texts
  if(this.init == 3)
  {
    this.innerHTML = "neither";
    this.style.fontSize = "70px";
  }
  else
  {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
      this.style.fontSize = "18px";

      if(toggle)
      {
        this.innerHTML = allTexts[this.init][topic];
      }
      else
      {
        this.innerHTML = choice[this.init];
        this.style.fontSize = "40px";
      }
    }
    else
    {
      this.innerHTML = allTexts[this.init][topic];

      //Styles for legibility
      this.style.fontSize = "30px";
    }
  }

    mediaButton.style.visibility = "hidden";
    mediaButton.style.opacity = "0";
    mediaButton.style.transition = "visibility 3s linear,opacity 3s linear";
}

//When the mouse releases the word, set it back to the initial term
function reset()
{
  this.innerHTML = choice[this.init];
  this.style.fontSize = "70px";

    mediaButton.style.visibility = "visible";
    mediaButton.style.opacity = "1";
}

//On a click, the term should cycle through terms and lexias
function swap()
{
  this.init++;

  if(this.init > 3)
  {
    this.init = 0;
  }

  if(this.init == 3)
  {
    this.innerHTML = "neither";

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
      this.style.fontSize = "40px";
    }
    else
    {
      this.style.fontSize = "70px";
    }
  }
  else
  {
    this.innerHTML = allTexts[this.init][topic];
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
      this.style.fontSize = "20px";
    }
    else
    {
      this.style.fontSize = "30px";
    }
  }
}

//Play and pause the music, also change the image
function soundToggle()
{
  if(this.isPlaying)
  {
    audio.pause();
    this.src = "media/play.png";
  }
  else
  {
    audio.play();
    this.src = "media/pause.png";
  }

  this.isPlaying = !this.isPlaying;
}
