// case.
// Program Untuk Menyimpan Data Pendaftaran Student PWD ke 1 unit,
// Validasi Data Inputnya
// name, username, email(@ = valid), password (min: 6, max: 10 (&&)), addres, phoneNumber (show data : 0812334*****)
//ProgramSelected("JCWD", "JCDM", "JCDS", "JCUI/UX", "JCVD")

class studentPwd {
    name;
    username;
    email;
    #password;
    addres;
    #phoneNumber;
    programSelected;

    constructor(name, username, addres, phoneNumber){
        this.name = name
        this.username = username
        this.addres = addres
        this.#phoneNumber = phoneNumber
    }

    set validateEmail(email){
        if(email.includes('@') && email.includes('.')){
            this.email = email
        }else{
            console.log('Email Tidak Valid');
        }
    }

    set validatePassword(password){
        if(password.length > 6 && password.length < 10){
            this.password = password
        }else{
            console.log('Password Tidak Valid');
        }
    }

    set validateProgramSelecter(programSelected){
        const programPwd = ["JCWD", "JCDM", "JCDS", "JCUI/UX", "JCVD"]
        if(programPwd.includes(programSelected.toUpperCase())){
            this.programSelected = programSelected.toUpperCase()
        }else{
            console.log('Program yang dipilih tidak ada');
        }
    }

    get showPhoneNumber(){
        console.log(this.#phoneNumber.slice(0, this.#phoneNumber.length()-6) + '*****')
    }
}

const student = new studentPwd("Muqi Gewa", "Muqi", "Medan", "081234567890");
student.validateEmail = "muqigewa@gmail.com";
student.validatePassword = "1234556";
// student.validatePhoneNumber = "081234567890";
student.validateProgramSelecter = "JCWW";

console.log(student);
