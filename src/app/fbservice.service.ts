import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Todolist } from './module';


@Injectable({
  providedIn: 'root'
})
export class FbserviceService {

  listCollection:AngularFirestoreCollection;
  listDocument:AngularFirestoreDocument;  

  constructor(private db:AngularFirestore) { 
    this.listCollection = this.db.collection('todolist');
  }

  getLists() {
    return this.db.collection('todolist').valueChanges();
  }

  addData(newItem:Todolist){
      const id = this.db.createId();
      console.log("Addition called");  
      newItem.id = id;
      this.listCollection.doc(id).set(newItem);
      console.log(newItem);
    }

    deleteData(item){
       this.listDocument = this.db.doc(`todolist/${item.id}`);
      this.listDocument.delete();
    }

    fbupdateData(updateddata:Todolist){
      console.log(updateddata.id);
      this.listDocument = this.db.doc(`todolist/${updateddata.id}`);
      this.listDocument.update(updateddata);
    }
  }
