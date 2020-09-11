'use strict'

//intro 
var user = prompt("Enter Your Name ");
<<<<<<< HEAD
alert('Welcome ' + user + ',v to my page ' + ' hope this will make you know a little about me ');
var Qtotal=0;
alert('Ok '+user+', i will start with some  question about me , ');
=======
alert('Welcome , ' + user + ' to my profile ' + ' hope to this will make you know a little of me and my personality ');
 var Qtotal=0;
alert('Ok , '+user+' i will start with you with some funny question , ');
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

prompt("Are you ready " + user);

 var per= prompt('Do You think am a funny person or not ?').toLowerCase();
 if(per=="yes"||per=="y")
 {
<<<<<<< HEAD
console.log("Your answer is "+per);
alert(" Great ,,  you guess me well ")
=======
console.log("Your answer is " + per);
alert("Great ,,  you guess my personality well ")
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

 }
 else if(per=="no"||per=="n")
 {
    alert("Ohhh , na na , i am a funny person ")
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
    alert("sorry  "+ user+ " you must insert yes/y or no/n just")
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
       
<<<<<<< HEAD
        alert('Correct answer for my friend '+user);
=======
       // document.write(  'Correct answer  ');
        alert('Correct answer for my name ' + user);
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499
        Qtotal++;
        break;
    case 'no':
        case 'n':
<<<<<<< HEAD
            alert('InCrrect answer my friend '+user);
            break;

            default:
                alert(user+' You must answer the name by Yes/y No/n just');
=======
            alert('InCrrect answer for name ' + user);
            break;

            default:
                alert(user +' You must answer the name by Yes/y No/n just');
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

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
      
<<<<<<< HEAD
        alert('Correct answer my friend '+user);
=======
       // document.write(  'Correct answer  ');

        alert('Correct answer for gender '+ user);

>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499
        Qtotal++;

        break;
    case 'no':
        case 'n':
<<<<<<< HEAD
            alert('InCrrect answer my friend '+user);
            break;
            default:
                alert(user+' You must answer the gender by Yes/y No/n just');
=======
            alert('InCrrect answer for gender '+ user);

            break;
            default:
                alert(user + ' You must answer the gender by Yes/y No/n just');
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499


}
}

//Question 3 Function  !!!!

var universty= prompt('Is My Universty Is JUST?').toLowerCase();;
<<<<<<< HEAD
console.log(" Your answer is "+universty);
=======
console.log("Your answer is " + universty);
myUniversity(universty);
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

function myUniversity(universty){
switch(universty)
{
    case 'yes':
    case 'y' :
        Qtotal++;
<<<<<<< HEAD

        alert('Correct answer my friend '+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer my friend '+user);
            break;
            default:
                alert(user+' You must answer the university by Yes/y No/n just');
=======
       // document.write(  'Correct answer  ');
        alert('Correct answer for university ' + user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for university ' + user);
            break;
            default:
                alert(user+'You must answer the university by Yes/y No/n just');
}
}
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

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
<<<<<<< HEAD
        alert('Correct answer my friend  '+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer my friend  '+user);
            break;
            default:
                alert(user+' You must answer the experience by Yes/y No/n just');
=======
       // document.write(  'Correct answer  ');
       
        alert('Correct answer for experence '+ user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for experence '+ user);
            break;
            default:
                alert(user +' You must answer the experience by Yes/y No/n just');
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

}
}

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
<<<<<<< HEAD
        alert('Correct answer my friend '+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer my friend  '+user);
            break;

            default:
                alert(user+' You must answer the goal by Yes/y No/n just');


}

alert('Great it\'s so nice  , '+user+' now i will start with you with a numerical question , ');
=======
       // document.write(  'Correct answer  ');
        alert('Correct answer for goal '+ user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for goal '+ user);
            break;

            default:
                alert(user +' You must answer the goal by Yes/y No/n just');
}
}

>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

alert('Great it is so nice  , '+ user +' now i will start with you with some numerical question , ');
prompt("Are you  ready my friend  " + user );




//Question 6 Function !!!!!!!


var tries = 1;
var ans = prompt("Guess my number ? ");
<<<<<<< HEAD
var ans = Number(ans);
=======
    ans = Number(ans);
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499
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

<<<<<<< HEAD
    ans = prompt("Guess my number ? ");
    arr.push(ans);
    tries++;
=======
    ans = prompt("Quessing my number ? ");
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

    arr.push(ans);

    tries++;
}
<<<<<<< HEAD

=======
  alert('My number is 20 ' + user);
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

for (var i = 0; i < arr.length; i++) {

    console.log('The atteptes ' + arr[i]);

}
}


// Question 7 Function !!!!!


var favColor = ['red', 'blue', 'black', 'green', 'pink'];
<<<<<<< HEAD
var userIn = prompt("Guess my favorite colores !!").toLowerCase();
=======
var userIn = prompt("guess my favrite colores").toLowerCase();
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499
var attempt = 0;
myFavColor(userIn,favColor);

function myFavColor (userIn , favColor){
while (attempt < 6)
 {
    for (var j = 0; j < favColor.length;j++) 
    {
        if (userIn === favColor[j])
         {
<<<<<<< HEAD
          
           alert("Grate your gussesing is corect ");
           total++;
=======
           alert("Grate your guess is correct ");
           Qtotal++;
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499
           var flag =true;
            break;
         
        }      
    }
    if(flag===true)
    break;
    else
        userIn = prompt("guess my favorite colores agian !! ").toLowerCase();

<<<<<<< HEAD
        userIn = prompt("Guess my favorite colores ").toLowerCase();

        total += 1;
=======
        Qtotal += 1;
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499
        attempt++;
    }
}

<<<<<<< HEAD
        alert("Your total is " + Qtotal +" out of 7 ");
=======
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499

for (var y = 0; y < favColor.length;y++) 
    {
<<<<<<< HEAD
        alert("The possible answers are " +favColor[i]);
        console.log("The possible answers are " +favColor[i]);
=======
        alert("the possible answers are " +favColor[y]);
        console.log("the possible answers are " +favColor[y]);
>>>>>>> ab49cea02fa340f705651ae4edd2470c88c60499
    }

alert("your total is " + Qtotal +" out of 7 ");
        

