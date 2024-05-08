//Object
//Case. Data Students -> Name, Address, FatherName, MothernName,Schools
//Key & Value ----> Property

//CRUD
// const objStudents = {
//     fullName: {
//         firstName : 'Defryan',
//         lastName : 'Ryan'
//     },
//     address : 'Bogor',
//     school: 'Telkom'
// }

// //READ
// console.log(objStudents.fullName.firstName);
// console.log(objStudents['address']);
// objStudents['newAddress'] = objStudents['address']

// //UPDATE
// objStudents.name = 'Ryan'
// objStudents.school = null

// //DELETE
// delete objStudents.school
// console.log(objStudents);

// // METHOD (Function yang disimpan kedalam Object)

// const print ={
//     name: 'Immanuel',
//     greeting(){
//         console.log(this.name);
//     },
//     welcoming:()=>{
//         console.log(this.name);
//     }
// }
// print.greeting()
// print.welcoming()

//Changing Condition
const student = {
    fullName:{
        firstName: 'Ryan',
        lastName : 'Defryan'
    }
}
console.log(student?.fullName?.firstName); //conditional changing
console.log(student['fullname']['firstName']);

const students = [
    {
        fullname: 'Defryan'
    },
    {
        fullname: 'Imanuel'
    },
    {
        fullname: 'Aboy'
    }
]

student[1].fullname


// DESTRUCTURING ASSIGMENT
// Mengkonversi Property Obj Menjadi Variable JS

const objCampusPwd = {
    name: 'Pwd BSD',
    address: 'GOP-09'
}

const {address, name} = objCampusPwd
console.log(name);
console.log(address);


// Case. Sebuah Class untuk Data Student yang ada di pwd