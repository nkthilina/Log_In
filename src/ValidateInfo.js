export default function ValidateInfo(values){
    let errors = {}

    //Name
    if(!values.name.trim()){
        errors.name = "Name is required"
    }

    //Username
    if(!values.username.trim()){
        errors.username = "Username is required"
    }

    //Email
    if(!values.email){
        errors.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    //Password
    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 6){
        errors.password = "Password need to have 6 or more characters"
    }

    //Contact number
    if(!values.contactNumber.trim()){
        errors.contactNumber = "Contact number is required"
    }

    //Address
    if(!values.address.trim()){
        errors.address = "Address is required"
    }

    return errors;
}