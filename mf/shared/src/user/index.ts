import { BehaviorSubject, Observable } from "rxjs";

interface User {
    name: string;
    email: string;
    password: string;
}

class UserState {

    private _userState = new BehaviorSubject<User[]>([])

    add(name: string, email : string, password: string):void{
        this._userState.next( this._userState.value.concat({name, email, password}));
    }

    user():Observable<User[]>{
        return this._userState.asObservable();
    }

}

export const userState = new UserState();