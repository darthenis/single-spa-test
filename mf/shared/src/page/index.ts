import { BehaviorSubject, Observable } from "rxjs";


enum Page{
    STORE = "STORE",
    USER = "USER",
}

class PageState{
    private _pageState = new BehaviorSubject<Page>(Page.STORE)

    switchPage(page : Page.STORE):void{
        this._pageState.next(page)
    }

    page():Observable<Page>{
        return this._pageState.asObservable();
    }
}

export const pageState = new PageState();