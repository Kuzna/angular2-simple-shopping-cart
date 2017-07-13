import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Donut } from '../domain/donut';

@Injectable()
export class DonutService {


    constructor(private http: Http) {}

    getDonuts(): Promise<Array<Donut>> {
        const donutsUrl = 'app/donuts';

        return this.http
            .get(donutsUrl)
            .toPromise()
            .then((response) => {
                return response.json().data as Donut[];
            })
            .catch(this.handleError);
    }

    getDonut(id: number) {
        const donutUrl = 'app/donuts/${id}';

        return this.http
            .get(donutUrl)
            .toPromise()
            .then((response) => {
                return response.json().data as Donut[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
