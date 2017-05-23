import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Person} from "../../modals/person";
import {UsersProvider} from "../../providers/users/users";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public peopleList: Person[];

  constructor(public navCtrl: NavController,
              public users: UsersProvider) {
    this.users.getPeople(200).subscribe((data) => {
      this.peopleList = data;
      console.log('peopleList: ',this.peopleList[0].picture.thumbnail);
    })
  }

  public delete(item){
   for(let i=0;i<this.peopleList.length;i++){
     if(this.peopleList[i]==item){
       this.peopleList.splice(i,1);
     }
   }
  }

}
