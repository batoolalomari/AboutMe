'use strict'

var user = prompt("Enter Your Name ");
alert('Welcome , ' + user + ' to my profile ' + ' hope to this will make you know a little of me and my personality ');
var Qtotal=0;
alert('Ok , '+user+' i will start with you with some funny question , ');

prompt("Are you ready "+user);

 

 var per= prompt('Do You think that am a funny person or not ?').toLowerCase();
 if(per=="yes"||per=="y")
 {
console.log("Your answer is "+per);
alert("Great ,,  you guess my personality well ")

 }
 else if(per=="no"||per=="n")
 {
    alert("Ohhh , na na , i am a funny person ")
 }

 else
 {
    alert("sorry  "+ user+ " you must insert yes/y or no/n just")
}


 var like=prompt('Do You think that l love coffee and drink it grater than two time at the day ?').toLowerCase();
 
 if(like=="yes"|| like=="y")
 {
console.log("Your answer is "+like);
alert(" Yahhhh , i like who guess this question correct about me , geart my friend  ");
 }
 else  if(like=="no"|| like=="n")
 {
    alert(" Oppes , it is not correct , it is my best drink and make me happy all the day  ");
 }

 else
 {
    alert("sorry  "+ user+ " you must insert yes/y or no/n just")
}


 //alert( 'Nice ,  hope to this will make you know a littile of me and my personality ');

 alert( 'Nice ,  hope to this will make you know a littile of me , list start with more about me and who am i!! ');


var name= prompt('Is Batool Alomari My Name ?');
console.log("Your answer is "+name);
switch(name)
{
    case 'yes':
    case 'y' :
       
       // document.write(  'Correct answer  ');
        alert('Correct answer for my name'+user);
        Qtotal++;
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for name'+user);
            break;

            default:
                alert(user+'You must answer the name by Yes/y No/n just');

}

var gender=  prompt('Is Female My Gender ?').toLowerCase();
console.log("Your answer is "+gender);
switch(gender)
{
    case 'yes':
    case 'y' :
      
       // document.write(  'Correct answer  ');
        alert('Correct answer for gender'+user);
        Qtotal++;
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for gender'+user);
            break;
            default:
                alert(user+'You must answer the gender by Yes/y No/n just');


}

var universty= prompt('Is My Universty Is JUST?').toLowerCase();;
console.log("Your answer is "+universty);

switch(universty)
{
    case 'yes':
    case 'y' :
        Qtotal++;
       // document.write(  'Correct answer  ');
        alert('Correct answer for university'+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for university'+user);
            break;
            default:
                alert(user+'You must answer the university by Yes/y No/n just');


}

var exp= prompt('Did I Have JAVA Programming Laguage Expirenece ?').toLowerCase();
console.log("Your answer is "+exp);
switch(exp)
{
    case 'yes':
    case 'y' :
        Qtotal++;
       // document.write(  'Correct answer  ');
       
        alert('Correct answer for experence'+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for experence'+user);
            break;
            default:
                alert(user+'You must answer the experience by Yes/y No/n just');

}


var goal= prompt('Is My Travilling One Of My Goals ?').toLowerCase();
console.log("Your answer is "+goal);

switch(goal)
{
    case 'yes':
    case 'y' :
        Qtotal++;
       // document.write(  'Correct answer  ');
        alert('Correct answer for goal'+user);
        break;
    case 'no':
        case 'n':
            alert('InCrrect answer for goal'+user);
            break;

            default:
                alert(user+'You must answer the goal by Yes/y No/n just');


}

alert('Great it is so nice  , '+user+' now i will start with you with some numerical question , ');

prompt("Are you  ready my friend  "+user );





var tries = 1;
var ans = prompt("Quessing my number ? ");
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

    ans = prompt("Quessing my number ? ");
    arr.push(ans);
    tries++;


}

//alert("Oops, you are not gusssing the number it is 20 ");

for (var i = 0; i < arr.length; i++) {
    console.log('The atteptes ' + arr[i]);
}


var favColor = ['red', 'blue', 'black', 'green', 'pink'];
var userIn = prompt("guseeing my favrite colores").toLowerCase();
var attempt = 0;
var total = 0;

while (attempt < 6)
 {
   
    for (var i = 0; i < favColor.length;i++) 
    {
      
        if (userIn == favColor[i])
         {
          
           alert("Grate your gussesing corect ");
           total++;
           var flag =true;
            total += 1;
            break;
         
        }
       /*else{
       userIn = prompt("guseeing my favrite colores ").toLowerCase();
       total += 1;
       alert("try agin ");
       }*/       
    }
    if(flag===true)
    break;
    else

        userIn = prompt("guseeing my favrite colores ").toLowerCase();

       total += 1;
       
   
    
      

        attempt++;

        
    }
    

        alert("your total is " + Qtotal +" out of 7 ");

        for (var i = 0; i < favColor.length;i++) 
    {
        alert("the possible answer is " +favColor[i]);
        console.log("the possible answer is " +favColor[i]);
    }

