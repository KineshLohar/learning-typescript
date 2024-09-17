class User1 {
    private _courseCount = 1

    constructor(public name : string, public email : string){
        this.name = name
        this.email = email
    }

    get getUserEmail():string{
        return this.email
    }

    set setUserEmail(newEmail :string){
        this.email = newEmail
    }

    get getPrivateCourseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 0){
            throw new Error("cannot be negative")
        }

        this._courseCount = courseNum
    }
}


const kinesh9 = new User1('kinesh','kin@gm.com' )

const email = kinesh9.getUserEmail
kinesh9.setUserEmail('newkin@g.com')