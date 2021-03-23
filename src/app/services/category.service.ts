import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }
  getCategrory(){
    return this.db.list('/Categories').snapshotChanges();
    console.log(this.db.list('/Categories').snapshotChanges());
  }
}
