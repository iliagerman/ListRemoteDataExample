import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Person} from "../../modals/person";
import {Observable} from "rxjs";

/*
 Generated class for the UsersProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UsersProvider {

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }

  public getPeople(numberOfPeople): Observable<Person[]> {
    return this.http.get('https://api.randomuser.me/?results='+numberOfPeople).map(res => {
      console.log(res);
      return res.json().results
    });
  }

}
