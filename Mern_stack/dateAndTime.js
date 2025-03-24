const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

const myCreatedDate = new Date(2023, 9, 26);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());


const myQwnDate = new Date("2023-01-12");
// console.log(myQwnDate.toDateString());
// console.log(myQwnDate.toLocaleString());

const myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
// console.log(myQwnDate.getTime());
// console.log(myQwnDate.getFullYear());
// console.log(myQwnDate.getHours());


let custamizedDate = myCreatedDate.toLocaleString('default',{
    weekday:'long',
    year:'2-digit',
    month:'long'
})
console.log(custamizedDate);

