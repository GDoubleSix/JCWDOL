class Users{
    username;
    email;
    #password;
    constructor(username, password){
        this.username = username
        this.password = password
    }

    get showPassword(){
        console.log(this.#password);
    }

    set validateEmail(email){
        if(!email.includes('@')){
            console.log('Email tidak valid');
        }else{
            this.email = email
        }
    }
}

const userAccount1 = new Users ('ryandefryan', 'abc123')
userAccount1.validateEmail = 'ryan@gmail.com'
console.log(userAccount1);