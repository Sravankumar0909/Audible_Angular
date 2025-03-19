export class LoginUser
{
    constructor(public username:String,public password:String){}
}

export class ChangePassword {
    email!:string
	username!:string
	oldPassword!:string
	newPassword!:string
	confirmPassword!:string
}