export default class User{
    constructor(email, name, password, password_confirmation, phone_number, address){
        this.email = email;
        this.name = name;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.phone_number = phone_number;
        this.address = address;
    }
}