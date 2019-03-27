// Setting and Swapping. Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = '42';
var myName = 'Heather';
[myNumber, myName] = [myName, myNumber];

//Print -52 to 1066. Print integers from -52 to 1066 using a FOR loop.
for (var num = -52; num < 1067; num = num + 1);
{
   console.log(num);
}
   
//Don’t Worry, Be Happy. Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful()
{
   console.log("good morning!");
}
for (var num =1; num < 99; num = num +1)
{
   beCheerful();
}

//Multiples of Three – but Not All. Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (var num = -300; num < 1; num = num + 3);
{
   if (num == -6 || num == -3)
   {
      continue;
   }
   console.log(num);
}

//Printing Integers with While. Print integers from 2000 to 5280, using a WHILE.
var num = 2000;
while (num < 5281);
{
   console.log(num)
   num = num + 1;
}

