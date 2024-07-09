// // // // // // // // // // // // // // // // // // // // // for loop-
// // // // // // // // // // // // // // // // // // // // for( let i = 1; i <= 11; i++){
// // // // // // // // // // // // // // // // // // // //     console.log("Shlok kumar");
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // console.log("loop has been eneded")



// // // // // // // // // // // // // // // // // // // //To  calculate summ of  1 to n
// // // // // // // // // // // // // // // // // // // let sum = 0;
// // // // // // // // // // // // // // // // // // // // let n =11;
// // // // // // // // // // // // // // // // // // // for (i = 1; i <= 11; i++) {
// // // // // // // // // // // // // // // // // // //     sum = sum + i;
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // console.log("Sum  of first 11 number is = ", sum)


// // // // // // // // // // // // // // // // // // //while loop

// // // // // // // // // // // // // // // // // // let i = 111;
// // // // // // // // // // // // // // // // // // while( i <= 11){
// // // // // // // // // // // // // // // // // //     console.log(" i = " , i);
// // // // // // // // // // // // // // // // // //     i++;
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // //do while loop
// // // // // // // // // // // // // // // // // let i = 11;

// // // // // // // // // // // // // // // // // do {
// // // // // // // // // // // // // // // // //     console.log("Shlok kumar");
// // // // // // // // // // // // // // // // //     i++
// // // // // // // // // // // // // // // // // } while(i <= 11 );

// // // // // // // // // // // // // // // // //for-of loop

// // // // // // // // // // // // // // // // let str ="Shlok_Kumar";

// // // // // // // // // // // // // // // // for(let i of str) {
// // // // // // // // // // // // // // // //     console.log("i =" , i)
// // // // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // // To find lenght of the string

// // // // // // // // // // // // // // // let str = "Mobile";

// // // // // // // // // // // // // // // let size = 0;
// // // // // // // // // // // // // // // for ( let val of str ){
// // // // // // // // // // // // // // //     console.log("i = " , val);
// // // // // // // // // // // // // // //     size++;
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log("String Size = ", size);



// // // // // // // // // // // // // // //for-in loop

// // // // // // // // // // // // // // let student = {
// // // // // // // // // // // // // //     name: "piku",
// // // // // // // // // // // // // //     age:21,
// // // // // // // // // // // // // //     cgpa:9.3,
// // // // // // // // // // // // // //     isPass:true
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // for(let key in student){
// // // // // // // // // // // // // //     console.log("key = ",key )

// // // // // // // // // // // // // // }


// // // // // // // // // // // // // // // Q1. print all even number from 0 to 111


// // // // // // // // // // // // // for (let num = 0; num <= 111; num++) {
// // // // // // // // // // // // //     if (num % 2 === 0) {
// // // // // // // // // // // // //         console.log(num);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // // }

// // // // // // // // // // // // // // // Q2. Create a game where you start with any random game number .Ask the user to keep guessing the game
// // // // // // // // // // // // //  // //number until the user enters correct value

// // // // // // // // // // // let gameNum = 14;

// // // // // // // // // // // let userNum = prompt("Guess the Game Number :" );

// // // // // // // // // // // while (userNum != gameNum){
// // // // // // // // // // //     userNum = prompt("You Entered Wrong Number. Guess again : ")

// // // // // // // // // // // }

// // // // // // // // // // // console.log("Congratulations , You enetred the Right Number");




// // // // // // // // // // // Strings

// // // // // // // // // // let str = "Shlok kumar";


// // // // // // // // // // console.log(str[0]);



// // // // // // // // // // Template Literals

// // // // // // // // // let specialString = `this is Template literal`;
// // // // // // // // // console.log(specialString);



// // // // // // // // // let obj = {
// // // // // // // // //     item : "pen",
// // // // // // // // //     price : 7,
// // // // // // // // // };
// // // // // // // // // let output =  `The cost of ${obj.item} is ${obj.price} rupess`;
// // // // // // // // // console.log(output);



// // // // // // // // let Id = {
// // // // // // // //      name :" Shlok Kumar",
// // // // // // // //      redgNo : 210192292,
// // // // // // // //      branch : "CSE(AIML)",
// // // // // // // //      college : "GEC",

// // // // // // // // };
// // // // // // // // let data = ` You are  ${Id.name}  redg no. is ${Id.redgNo} studying  ${Id.branch} course  `;
// // // // // // // // console.log(data)

// // // // // // // let math  = `${5+14}`;]
// // // // // // // console.log(math)
// // // // // // console.log("mobile \nlaptop" );

// // // // // let str = "shreya kumari";
// // // // // let newStr = str.toUpperCase();
// // // // // console.log(str);
// // // // // console.log(newStr);


// // // // let str ="   who are   you    ";
// // // // console.log(str.trim())


// // //  console.log("SHREYA KUMARI");



// // let str1 = "My Name  is ";
// // let str2 = "SHLOK KUMAR";

// // let result =  str1.concat(str2);
// // console.log(result);


// //Question-- Prompt the user name to enter their full name . Generate the full name for them based on the input.
// //Start user name with @, followed by theirfull name and ending with with the full lenght.


// let fullName  = prompt(" Enter your full name without spaces");
// let userName =  "@" + fullName + fullName.length;
// console.log(userName); 