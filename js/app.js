'use strict'

var user = prompt("Enter Your Name ");
alert('Welcome ' + user + ',v to my page ' + ' hope this will make you know a little about me ');
var Qtotal=0;
alert('Ok '+user+', i will start with some  question about me , ');

prompt("Are you ready "+user);

 

 var per= prompt('Do You think am a funny person or not ?').toLowerCase();
 if(per=="yes"||per=="y")
 {
console.log("Your answer is "+per);
alert(" Great ,,  you guess me well ")

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
console.log("Your answer is "+like);
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


var name= prompt('Is Batool Alomari My Name ?');
console.log("Your answer is "+name);
switch(name)
{
    case 'yes':
    case 'y' :
       
        alert('Correct answer for my friend '+user);
        Qtotal++;
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer my friend '+user);
            break;

            default:
                alert(user+' You must answer the name by Yes/y No/n just');

}

var gender=  prompt('Is Female My Gender ?').toLowerCase();
console.log("Your answer is "+gender);
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

var universty= prompt('Is My Universty Is JUST?').toLowerCase();;
console.log(" Your answer is "+universty);

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


}

var exp= prompt('Did I Have JAVA Programming Laguage Expirenece ?').toLowerCase();
console.log("Your answer is "+exp);
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

}


var goal= prompt('Is My Travilling One Of My Goals ?').toLowerCase();
console.log("Your answer is "+goal);

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

alert('Great it\'s so nice  , '+user+' now i will start with you with a numerical question , ');

prompt("Are you  ready my friend  "+user );





var tries = 1;
var ans = prompt("Guess my number ? ");
var ans = Number(ans);
var arr = [ans];
var num = 20;
while (tries <= 4) {
    if (ans > num) {
        alert("Tow high  " + user);

    }
    else if (ans < num) {
        alert("Tow low  " + user);

    }

    else {
        alert("Grate this is a correct answer ");
        total++;
        break;
    }

    ans = prompt("Guess my number ? ");
    arr.push(ans);
    tries++;


}


for (var i = 0; i < arr.length; i++) {
    console.log('The atteptes ' + arr[i]);
}


var favColor = ['red', 'blue', 'black', 'green', 'pink'];
var userIn = prompt("Guess my favorite colores !!").toLowerCase();
var attempt = 0;
var total = 0;

while (attempt < 6)
 {
   
    for (var i = 0; i < favColor.length;i++) 
    {
      
        if (userIn == favColor[i])
         {
          
           alert("Grate your gussesing is corect ");
           total++;
           var flag =true;
            total += 1;
            break;
         
        }      
    }
    if(flag===true)
    break;
    else

        userIn = prompt("Guess my favorite colores ").toLowerCase();

        total += 1;
        attempt++;

        
    }
    

        alert("Your total is " + Qtotal +" out of 7 ");

        for (var i = 0; i < favColor.length;i++) 
    {
        alert("The possible answers are " +favColor[i]);
        console.log("The possible answers are " +favColor[i]);
    }

