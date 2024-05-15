// class UserData {
//     constructor(name, username) {
//         this.name = name;
//         this.username = username;
//         this.email = '';
//     }

//     set setEmail(email) {
//         if (email.includes('@') && email.includes('.')) {
//             this.email = email;
//         } else {
//             alert('Email not Valid');
//             const newEmail = prompt('Enter your email');
//             this.setEmail = newEmail;
//         }
//     }

//     get getEmail() {
//         return this.email;
//     }

//     displayUserData() {
//         return `Name: ${this.name}\nUsername: ${this.username}\nEmail: ${this.email}`;
//     }
// }

// let userDataArr = [];

// const menuUtama = [{
//         menu: 'Insert'
//     },
//     {
//         menu: 'Show'
//     }
// ];

// while (true) {
//     let printMenu = '';
//     menuUtama.forEach((menuUtama, index) => {
//         printMenu += `${index + 1}. ${menuUtama.menu} \n`;
//     });

//     const selectedMenu = Number(prompt(printMenu));

//     if (selectedMenu === 1) {
//         const name = prompt('Enter your name');
//         const username = prompt('Enter your username');
//         let email = prompt('Enter your email');

//         // Validasi email
//         while (!email.includes('@') || !email.includes('.')) {
//             alert('Email Tidak Valid');
//             email = prompt('Enter your email');
//         }

//         const userData = new UserData(name, username);
//         userData.setEmail = email;
//         userDataArr.push(userData); // Menyimpan data ke array
//         alert('Data berhasil disimpan!');
//     } else if (selectedMenu === 2) {
//         if (userDataArr.length > 0) {
//             let allStudent = '';
//             userDataArr.forEach((insertStudent, index) => {
//                 allStudent += `${index + 1} : ${insertStudent.name} - ${insertStudent.username} - ${insertStudent.email}\n`;
//             });
//             alert(allStudent);
//         } else {
//             alert('No data has been inserted yet.');
//         }
//     } else {
//         alert('Invalid selection. Please choose a valid option.');
//     }
// }


///////////////////////////////////////////////////////////////////////////////////////////////

const arrStudents = []

class StudentRegistration{
    username;
    email;
    #password
    #phoneNumber

    constructor(username, email, password, phoneNumber){
        this.username = username
        this.email = email
        this.#password = password
        this.#phoneNumber = phoneNumber
    }

    static registrationForm(){
        const username = prompt('Username')
        const email = prompt('Email')
        const password = prompt('Password')
        const phoneNumber = prompt('Phone Number')

        if(!email.includes('@') || !email.includes('.')){
            return {eror:true, message: 'Email Not Valid!'}
        }else if(password.length < 6 || password.length > 10){
            return {error:true, message: 'Pasword Have Minimum & Maximum Length'}
        }else{
            return{eror:false, data:{username, email, password, phoneNumber}}
        }
    }
}

do {
    var selectedMenu = prompt('Select Menu: \n 1. Register Student \n 2. Show Student Data')

    if(selectedMenu === '1'){
        // Register Student
        const result = StudentRegistration.registrationForm()

        if(result.eror === true){
            alert(result.message)
        }else if(result.eror === false){
            const emailExists = arrStudents.some(student =>
                student.email === result.data.email
            )

            if(emailExists){
                alert('Email has been already')
            }else{
                const insertStuden = new StudentRegistration(result.data.username, result.data.email, result.data.password, result.data.phoneNumber)
                arrStudents.push(insertStuden)
                alert('Data berhasil disimpan!');

                console.log(arrStudents);
            }
        }
    }else if (selectedMenu === '2') {
        if (arrStudents.length > 0) {
            let allStudent = '';
            arrStudents.forEach((insertStudent, index) => {
                allStudent += `Student ${index + 1} :\nUsername : ${insertStudent.username},\nEmail : ${insertStudent.email}\n\n`;
            });
            alert(allStudent)
        } else {
            console.log('No student data available.');
        }
    }

} while (selectedMenu === '1' || selectedMenu ==='2');