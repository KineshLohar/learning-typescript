interface PublishUser {
    name : string,
    email : string,
    isActive : boolean,
    number : number
}

 interface CreateFirstStory {
    createStory() 
 }

 class NewUser implements PublishUser{
    constructor(
        public name : string,
        public email : string,
        public isActive : boolean,
        public number :number
    ){}
 }

 class NewUser1 implements PublishUser, CreateFirstStory{
    constructor(
        public name : string,
        public email : string,
        public isActive : boolean,
        public number :number,
    ){}
    createStory() {
        console.log("first story created");
    }
 }