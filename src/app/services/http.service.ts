import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})

export class HTTPService {
    constructor(private http: HttpClient) { }

    handleError(error: any): any {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
        }
        //console.error(errorMessage.toString());
        return throwError(() => {
            const error: any = new Error(errorMessage);
            error.timestamp = Date.now();
            return error;
        });
    }

    get(path: string, params: any = {}, imageType?: boolean): Observable<any> {
        return this.http.get(`${path}`, {
                params,
                responseType: (imageType ? 'blob' : 'json') as any,
            })
            .pipe(catchError(this.handleError));
    }
}