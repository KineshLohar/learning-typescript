
type User1 = {
    name  : string;
    id : number;
}

type Admin = {
    username  : string;
    id : number;
}

let kinesh : User1 | Admin = {
    name : 'kinesh',
    id : 1,
    username : 'kines'
} 

const numAndString : (string | number | boolean)[] = [
    1,
    "1",
    true
]