type Coupon = {
    name : string;
    value : number;
}

interface User {
    readonly _id : number,
    email : string,
    name : string,
    userId : number,
    start(): string,
    getCoupon(couponname : string) : Coupon
}

//reopeing the interface
interface User {
    googleId : string,
    githubId : string
    
}

const kinesh : User = {
    _id : 21121,
    email : 'kinesh',
    name : 'kinesh',
    userId : 2313,
    githubId : 'ssfjsndf',
    googleId : 'sdskjfsdkjf',
    start : () => 'started',
    getCoupon : (name : 'kin') => ({
        name,
        value : 10
    })
}


interface Admin extends User {
    role : "admin" | 'user'
}

const adminKin: Admin = {
    _id : 21121,
    email : 'kinesh',
    name : 'kinesh',
    userId : 2313,
    role : 'user',
    githubId : 'ssfjsndf',
    googleId : 'sdskjfsdkjf',
    start : () => 'started',
    getCoupon : (name : 'kin') => ({
        name,
        value : 10
    })
}


console.log(kinesh);
