// Setting and Swapping. Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = '42';
var myName = 'Heather';
[myNumber, myName] = [myName, myNumber];

//Print -52 to 1066. Print integers from -52 to 1066 using a FOR loop.

for (var num = -52; num < 1067; num = num + 1)
{
   console.log(num);
}
   
//Don’t Worry, Be Happy. Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful()
{
   console.log("good morning!");
}
for (var num = 1; num < 99; num = num + 1)
{
   beCheerful();
}

//Multiples of Three – but Not All. Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (var num = -300; num < 1; num = num + 3)
{
   if (num == -6 || num == -3)
   {
      continue;
   }
   console.log(num);
}

//Printing Integers with While. Print integers from 2000 to 5280, using a WHILE.
var num = 2000;

while (num < 5281)
{
   console.log(num);
   
   num = num + 1;
}
console.log(num);

//You Say It’s Your Birthday.  If 2 given numbers represent your birth month and day in either order, log 
//"How did you know?", else log "Just another day..."

if (birthMonth == "12" && birthDay == "20")
{
   console.log("How did you know?");
}
else
{
   console.log("Just another day...");
}

//Leap Year. Write a function that determines whether a given year is a leap year. If a year is divisible by four, 
//it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is. 

var year = 2400;
function leapYear()
{
   console.log(year + " is a leap year.");
}
function notleapYear()
{
   console.log(year + " is not a leap year.");
}

if (year % 4 === 0)
{
   if (year % 100 === 0)
   {
     if (year % 400 === 0)
     {
        leapYear();
     }
      else
      {
         notleapYear();
      }
   }
   else
   { 
      leapYear();
   }
   
}
else 
{
   notleapYear();
}

//Print and Count. Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were. 
   
var num = 512
var count = 0
while (num < 4097)
   {
      console.log(num);
      num = num + 5;
      count = count + 1;  
   }
console.log(count);
   
//Multiples of six. Print multiples of 6 up to 60,000, using a WHILE.
   
var num = 6
while (num < 60001)
{
   console.log(num);
   num = num + 6;
}
   
//Counting, the Dojo Way. Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo". 
   
var num = 1
while (num < 101)
{
   if (num % 5 === 0)
   {
      if (num % 10 === 0)
      {
         console.log("Coding Dojo");
         }
      else
      {
         console.log("Coding");
         }
      }
   else
   {
      console.log(num);
      }
   num = num + 1;
}
   
   
