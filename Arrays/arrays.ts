const superHeros : string[] = []
superHeros.push("bob", "the", "builder")

const superNumbers : number[] = [1,2,3]
superNumbers.push(4,5,6)

// --------------------------------------------

type User = {
    name : string,
    age : number
}
const superUsers : User[] = []
// const testUser = {
//     name : 'testuser',
//     email : ''
// }
const testUser = {
    name : 'testuser',
    age : 21
}
superUsers.push(testUser)

// --------------------------------------------

type typeObj = {
    name : string,
    email : string
}

type typeArr = {
    [key : string] : typeObj;
}

const ArrayOfObjects : Array<typeArr> = []

ArrayOfObjects.push({
        "name" : {
            name : 'kines',
            email : 'abc'
        },
})


// --------------------------------------------

type newObj = {
    readonly _id : string,
    name : string,
    email : string,
    age : number
}
const newAryOfObj : Array<newObj>  = []

newAryOfObj.push({
    _id : '12313',
    name : 'kinesh',
    email : 'kin@gma.com',
    age : 21
})
// cannot asign to readonly
// newAryOfObj[0]._id = '121212' 


// --------------------------------------------

