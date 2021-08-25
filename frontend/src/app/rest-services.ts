import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class RestService {
    private backendUrl = "http://localhost:8080";
    private pythonBackend = "http://localhost:8000";

    constructor(private http: HttpClient) {}

    getSnp500(): any {
        return this.http.get(this.pythonBackend + "/snp500")
    }

    getUser(): any {
        return this.http.get(this.backendUrl + "/user") as Observable<string>
    }

    getUserAsset(): any {
        return this.http.get(this.backendUrl + "/user/asset")
    }

    getSearchStock(symbol: string): any {
        return this.http.get(this.backendUrl + "/search/" + symbol)
    }

}