//introduction to typescript

function add(a: number, b: number): number {
    return a + b
}

const result: number = add(3, 4)
console.log(result)

type UserID = string

interface User {
    id: UserID
    fname: string
    lname: string
    email: string
    contact: {
        mobile: string
    }   
    address: {
        street: number
        pin: number
        country: string

    }
}

class InMemoryDB {
    private _db: Map<UserID, User>

    constructor() {

    }

    public async isertUser(data: User): UserID {
        if (this._db.has(data.id)) {
            throw new Error('User with ID ${data.id} already exists')
        }
        this._db.set(data.id, data)
        return data.id
    }
}

const myDb = new InMemoryDB()
myDb.insertUser({
    id: '1',
    fname: 'Prince',
    lname: 'Singh',
    email: 'princekua098@gmail.com',
    contact: {mobile: '99999'},

})