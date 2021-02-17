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

  let interns = {


                intern1:{ firstName: "Mitzi",
                gender: "f",
                email:"mmelloy0@psu.edu,",
                id: 5},

                intern2:{
                firstName: "Antonietta",
                gender: "f",
                email:"adaine5@samsung.com",
                id: 1
                },

                intern3:{
                  firstName: "Gannie",
                gender: "m",
                email:"gmartinson3@illinois.edu,",
                id: 4
                },

             intern4:{firstName: "Keven",
                gender: "m",
                email:"kmummery2@wikimedia.org",
                id: 3},

                intern5:{firstName: "Kennan",
                gender: "m",
                email:"kdiben1@tinypic.com",
                id: 2}

  };
  // console.log(interns);














  
  
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  console.log(interns.intern1.firstName);
  
  // Kennan's ID
 console.log(interns.intern5.id);
  // Keven's email
  console.log(interns.intern4.email);
  // Gannie's name
  console.log(interns.intern3.firstName);
  // Antonietta's Gender
  console.log(interns.intern2.gender);
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
   console.log("hello, my name is" + " " + interns.intern4.firstName)
  
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4)); ??????
  
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