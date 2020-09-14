'use strict'


//intro 
var user = prompt("Enter Your Name ");
alert('Welcome ' + user + ', to my page ' + ' hope this will make you know a little about me ');
var Qtotal=0;
alert('Ok '+user+', i will start with some  question about me , ');
prompt("Are you ready " + user);

 var per= prompt('Do You think am a funny person or not ?').toLowerCase();
 if(per=="yes"||per=="y")
 {
    console.log("Your answer is "+per);
    alert(" Great ,,  you guess me well ");
    console.log("Your answer is " + per);
  
}

else if(per=="no"||per=="n")
{
   alert("Ohhh , na na , i am a funny person ");
}

else
{
   alert("Sorry  "+ user+ ", you must insert yes/y or no/n just")
}


var like=prompt('Do You think that l love coffee and drink it grater than two time at a day ?').toLowerCase();

if(like=="yes"|| like=="y")
{
console.log("Your answer is "+ like);
alert(" Yahhhh , i like who guess this question correct about me , geart my friend  ");
}
else  if(like=="no"|| like=="n")
{
   alert(" Oppes , it is incorrect , it is my best drink and make me happy all the day  ");
}

else
{
   alert("sorry  "+ user+ " you must insert yes/y or no/n just");
}

alert( 'Nice , hope this will make you know a little about me , let\'s start with more about me and who am i!! ');



// Question 1 Function !!!!!

var name= prompt('Is Batool Alomari My Name ?');
console.log("Your answer is " + name);
myName(name);

function myName(name){
    switch(name)
    {
   case 'yes':
   case 'y' :
    alert('Correct answer  my friend '+user);
    Qtotal++;
    break;
case 'no':
    case 'n':
        alert('InCrrect answer my friend '+user);
            break;

            default:
                alert(user+' You must answer the name by Yes/y No/n just');

               

                    
}
}


// Question 2 Function !!!!!

var gender=  prompt('Is Female My Gender ?').toLowerCase();

console.log("Your answer is "+ gender);

myGender(gender);

function myGender(gender){

switch(gender)
{
    case 'yes':
    case 'y' :
        alert('Correct answer my friend '+user);
        Qtotal++;

        break;
    case 'no':
        case 'n':
            alert('InCrrect answer my friend '+user);
            break;
            default:
                alert(user+' You must answer the gender by Yes/y No/n just');
               

}
}

//Question 3 Function  !!!!

var universty= prompt('Is My Universty Is JUST?').toLowerCase();
console.log("Your answer is " + universty);
myUniversity(universty);
function myUniversity(universty){
    switch(universty)
    {
        case 'yes':
        case 'y' :
            Qtotal++;
            alert('Correct answer my friend '+user);
            break;
        case 'no':
            case 'n':
                alert('InCrrect answer my friend '+user);
                break;
                default:
                    alert(user+' You must answer the university by Yes/y No/n just');
    }}

    //Question 4 Function !!!!!


var exp= prompt('Did I Have JAVA Programming Laguage Expirenece ?').toLowerCase();
console.log("Your answer is "+ exp);
myExper(exp);

function myExper(exp){
switch(exp)
{
    case 'yes':
    case 'y' :
        Qtotal++;
        alert('Correct answer my friend  '+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer my friend  '+user);
            break;
            default:
                alert(user+' You must answer the experience by Yes/y No/n just');

}}

// Question 5 Function !!!!

var goal= prompt('Is My Travilling One Of My Goals ?').toLowerCase();
console.log("Your answer is "+ goal);
myGoal(goal);

function myGoal(goal){
switch(goal)
{
    case 'yes':
    case 'y' :
        Qtotal++;
        alert('Correct answer my friend '+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer my friend  '+user);
            break;

            default:
                alert(user+' You must answer the goal by Yes/y No/n just');


}

}
alert('Great it is so nice  , '+ user +' now i will start with you with some numerical question , ');
prompt("Are you  ready my friend  " + user );




//Question 6 Function !!!!!!!


var tries = 1;
var ans = prompt("Guess my number ? ");
var ans = Number(ans);
var arr = [ans];
var num = 20;
userTries(arr, ans, num);

function userTries(arr, ans, num){
while (tries < 4) {

    if (ans > num) {
        alert("Too high  " + user);
    }

    else if (ans < num) {
        alert("Too low  " + user);
    }

    else {
        alert("Grate this is a correct answer ");
        Qtotal++;
        break;
    }
    ans = prompt("Guess my number ? ");
    arr.push(ans);
    tries++;
    if(tries===4)
    alert('My number is 20 ' + user);
}
for (var i = 0; i < arr.length; i++) {

    console.log('The atteptes ' + arr[i]);

}
}


// Question 7 Function !!!!!


var favColor = ['red', 'blue', 'black', 'green', 'pink'];

var userIn = prompt("Guess my favorite colores !!").toLowerCase();
var attempt = 0;
myFavColor(userIn,favColor);

function myFavColor (userIn , favColor){
while (attempt < 6)
 {
    for (var j = 0; j < favColor.length;j++) 
    {
        if (userIn === favColor[j])
         { 
         alert("Grate your guess is correct ");
         Qtotal++;
         var flag =true;
         break;
      
     }      
 }
 if(flag===true)
 break;
 else
     userIn = prompt("guess my favorite colores agian !! ").toLowerCase();
     attempt++;
    }
}

for (var y = 0; y < favColor.length;y++) 
    {
        alert("The possible answers are " +favColor[y]);
        console.log("The possible answers are " +favColor[y]);
        alert("the possible answers are " +favColor[y]);
        console.log("the possible answers are " +favColor[y]);
    }

    alert("your total is " + Qtotal +" out of 7 ");



