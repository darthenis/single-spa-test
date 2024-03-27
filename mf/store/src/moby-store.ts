import { BehaviorSubject, Observable } from "rxjs"

// Anything exported from this file is importable by other in-browser modules.

interface Item {
    name: string,
    price: string;
}

class UserState {
    private _store = new BehaviorSubject<Item[]>([])

    public login(name : string, price: string){
        let array = [...this._store.value]
        this._store.next(array.concat({name, price}))
    }

    public store():Observable<Item[]>{
        return this._store.asObservable();
    }

}

export const userState = new UserState();