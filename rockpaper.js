//computer choice
var result=Math.floor(Math.random()*3);
function computerchoice(result)
{  
var array=["rock","paper","scisors"];
let choice= array[result];   
return  choice;
console.log(choice);
};

var botchoice=computerchoice(result);
console.log(botchoice);



//human choice
function rpsgame(selectedchoice){
    var userchoice=selectedchoice.id;
   var h2=document.createElement("h2");
h2.setAttribute("id","heading1");
var texts=document.createTextNode("userchoice is:"+userchoice);
h2.appendChild(texts);
document.getElementById("gameon").style.display="none";
document.getElementById("container").appendChild(h2);
    
var h2=document.createElement("h2");
h2.setAttribute("id","heading1");
var text=document.createTextNode("computer choice is:"+botchoice);
h2.appendChild(text);

document.getElementById("container2").appendChild(h2);

    
var winner= message(userchoice,botchoice);   
function message(userchoice,botchoice){
       if (userchoice==botchoice){
           console.log("tied");
           var h2=document.createElement("h2");
           var textss=document.createTextNode("tied");
           h2.appendChild(textss);
           document.getElementById("container3").appendChild(h2);
       } 
      else if ((userchoice=="rock") && (botchoice=="scisors")) {
          console.log("you win");
                     var h2=document.createElement("h2");
           var textss=document.createTextNode("you win");
           h2.appendChild(textss);
           document.getElementById("container3").appendChild(h2);
          
      }
     else if ((userchoice=="paper") && (botchoice=="rock")) {
          console.log("you win");
                    var h2=document.createElement("h2");
           var textss=document.createTextNode("you win");
           h2.appendChild(textss);
           document.getElementById("container3").appendChild(h2);
      }
      else if ((userchoice=="scisors") && (botchoice=="paper")) {
          console.log("you win");
                     var h2=document.createElement("h2");
           var textss=document.createTextNode("you win");
           h2.appendChild(textss);
           document.getElementById("container3").appendChild(h2);
      }
      else{
          console.log("you failed");
                     var h2=document.createElement("h2");
           var textss=document.createTextNode("you failed");
           h2.appendChild(textss);
           document.getElementById("container3").appendChild(h2);
      }
   };
    
};


