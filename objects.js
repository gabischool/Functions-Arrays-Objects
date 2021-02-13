// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
    id: 0,
    name: "Example",
    email: "examples@you.edu",
    gender: "F",
  }
  
  // Write your intern objects here: 
  const person1 ={
    id:1,
     name : "mitzi",
     email:"mmelloy0@psu.edu",
     gender:"F"
}
const person2={
  id:2,
   name :"Kennan",
   email:"kdiben1@tinypic.com",
   gender:"M",
  }

  const person3 ={
id:3,
name:"Kaven",
email:"kmummery2@wikimedia.org",
gender:"M",
}
const person4={
  id:4,
  name:"Gannie",
  email:"gmartinson3@illinois.edu",
  gender:"M",
}
const person5={
  id:5,
  name:"Antonietta",
  email:"adaine5@samsung.com",
  gender:"F"

}

    
  
  
  
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  person1.name
  // Kennan's ID
  person2.id
  // Keven's email
  person3.email
  // Gannie's name
  person4.name
  // Antonietta's Gender
  person5.gender
  
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
  
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  
  // ==== Stretch Challenge: Nested Objects and the this keyword ==== 
  
  // 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
  // 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
  // 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
  // 4. Give each of the objects the ability to speak their names using the this keyword.
  
  const parent = {}
  
  // Log the parent object's name
  
  // Log the child's age
  
  // Log the name and age of the grandchild
  
  // Have the parent speak
  
  // Have the child speak
  
  // Have the grandchild speak