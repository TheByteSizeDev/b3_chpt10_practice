
const outputElement = document.querySelector("#app");

/*Lightning Exercise 1: Create an object that represents a bill 
from your doctor's office. It should have the following properties: 
officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, 
dueDate. You provide example values for each one.*/

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

const doctorBill = {
  officeName: "Tipman Chiropractic",
  streetAddress: "123 Main St",
  doctorName: "Young Neil",
  patientName: "Tipatina Brown",
  visitDate: "09/23/18",
  amountBilled: "$12.00",
  dueDate: "09/23/2022"
};

/*Use square bracket notation to output the value of those 
three properties to the console in Chrome*/

console.log(doctorBill[dateVisited]);
console.log(doctorBill[owed]);
console.log(doctorBill[patient]);

/*Lightning Exercise 3: Use Object.values() to output all the 
property values to the console in Chrome.*/

console.log(Object.values(doctorBill));

/*Lightning Exercise 1: Output all of the key names from your doctor's 
office bill to the console in Chrome.

Lightning Exercise 2: Output all of the key names from your doctor's office 
bill to the DOM inside a parent <section> element. Wrap each one in a <span> 
element.*/

for(const key of Object.keys(doctorBill)){
    console.log("key", key)
}

for(const key of Object.keys(doctorBill)){
    let section = document.createElement("section")
    outputElement.appendChild(section)
    section.innerHTML += `<span> ${key} </span>`
}