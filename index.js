/* 
'continue' keyword can be used to interfere with the iteration of a loop, instead of breaking it completely .


Challenge.

write a 'for loop' which uses the 'continue' keyword in some way, iterate through the numbers 0 - 10 and log only ODD numbers to the console */


let i;

for (i = 0; i < 10; i ++) {

  if (i %2 === 0) {

    continue;
  }

  console.log(i);
}