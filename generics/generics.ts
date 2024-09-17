const score : Array<number> = []
const names : Array<string> = []

function one(val : boolean | string | number){
    return val
}

function two(val : any) : any{
    return val
}

function three<Type>(val : Type): Type{
    return val
}

function four<T>(val : T): T{
    return val
}