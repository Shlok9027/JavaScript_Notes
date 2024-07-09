// // // // // // // // console.log("SHLOK KUMAR");

// // // // // // // //Array in JavaScript

// // // // // let marks_Student = [94 , 82, 88, 70, 65];
// // // // // console.log(marks_Student);
// // // // // console.log(marks_Student.length);


// // // // // //Looping Over Array

// // // // // using for loop-
// // // // // // let subjects = ["OE", "SE", "CD", "CC", "ADC"];
// // // // // // for (let i=0; i<subject.length; i++) {
// // // // // //     console.log(subject[i]);
// // // // // // }


// // // // // let student = ["aa","cc","ee"];
// // // // // for(let i = 0 ; i <student.length; i++){
// // // // //     console.log(student[i]);
// // // // // }

// // // // //using for-of loop-


// // // // let subjects = ["OE" , "SE" , "CD" , "CC" , "ADC"];

// // // // for ( let subject of subjects) {
// // // //     console.log(subject)

// // // // }


// // // let cities = [ "Ranchi", "Mumbai", "new Delhi", "aayodhya", "kashi"];

// // // for(let city of cities ){
// // //     console.log(city);
// // //     console.log(city.toUpperCase())
// // // }



// // //practice  question--

// // // For a given array with marks of student ->[85.97,44,37,76,60]
// // //find the average marks of the entire class.

// // let marks = [85, 97, 44, 37, 76, 60 ];
// // let sum = 0;
// // for (let  val of marks){

// //     sum += val;
// // }
// // let avg = sum / marks.length;
// // console.log(`avg marks of the class = ${avg}`);



// // // For a given array with price of 5 items- > [250,645,300,900,50]
// // // All item have an offer of 10% OFF on them . Change  the array to store final price after applying offers


// //using for of loop

// // let items = [250, 645, 300, 900, 50];
// // let i = 0;
// // for (let val of items ){ 
// //     // console.log(`values at index ${i} = ${val}`);
// //     let offer = val /  10;
// //     items[i] = items[i] - offer;
// //     console.log(`values after applying offers  = ${items[i]}`);
// //     i++;
// // }
   
// // using for loop

// let items = [ 250, 645, 300, 900, 50];

// for ( let i = 0 ;  i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

//push

// let devices= ["Television" , "Mobile" , "Remote" , "laptop" ];
// console.log(devices);

// devices.push("earphone", "earbuds");
// console.log(devices);

//pop

// let devices= ["Television" , "Mobile" , "Remote" , "laptop" ];
// console.log(devices);

// let deletedItem = devices.pop();
// console.log(devices);
// console.log("deleted : " , deletedItem)

// toString-

// let devices= ["Television" , "Mobile" , "Remote" , "laptop" ];
// console.log(devices);
// console.log(devices.toString());

// concate-

// let evenNums =["2", "4", "6", "8"]
// let oddNums = ["1","3", "5","7"];

// let nums = evenNums.concat(oddNums);

// console.log(nums);

// unshift- 

// let devices= ["Television" , "Mobile" , "Remote" , "laptop" ];
// console.log(devices);

// devices.unshift("earbuds");
// console.log(devices);


// shift-


// let devices= ["Television" , "Mobile" , "Remote" , "laptop" ];
// console.log(devices);

// let val = devices.shift();
// console.log("deleted : ", devices);

// slice-

// let devices = [ "television" , "mobile ", "remote", "Laptop", "earbuds"];
// console.log(devices);

// console.log(devices.slice(2,4));


// splice- 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(2, 2, 10, 11);

// // practice question -->
// Create  an array to store companies->"Bloomberg", "Microsoft", "Uber", "google " , "IBM", , "Netflix".
// a.Remove the first company from the array
// b. remove UBER and Add ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "google", "IBM", "Netflix"];
console.log(companies);

// companies.shift();


companies.splice(2,1,"Ola")

companies.push("Amazon")