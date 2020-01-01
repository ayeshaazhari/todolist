import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Todolist } from './module';
import { AuthService } from './shared/services/auth.service';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FbserviceService {
  fackeuid = "asdf";
  listCollection:AngularFirestoreCollection;
  listDocument:AngularFirestoreDocument;
  userdata;
  currentuid;
  list;
  catlist;

  constructor(private db:AngularFirestore, private authservice:AuthService) {
    this.userdata = authservice.userData;
    this.currentuid = authservice.userUid;
    // this.catlist = this.userdata.catlist;
    this.listCollection = this.db.collection('users');
    console.log(this.userdata);
    this.currentuid = this.userdata.uid;
  }

  getLists() { 
    var fbdata =  this.listCollection.doc(this.currentuid).collection(this.currentuid).valueChanges();
    return fbdata;
  }
  getcatlist(){
    var catlist;
    catlist = this.listCollection.doc(this.currentuid).valueChanges();
    console.log(catlist);
    return catlist;
  }

  addData(newItem:Todolist){
      const id = this.db.createId();
      console.log("Addition called" + this.currentuid);
      newItem.id = id;
      this.listCollection.doc(this.currentuid).collection(this.currentuid).doc(id).set(Object.assign({}, newItem));
      
      console.log(newItem);
    }

    deleteData(item){
      this.listDocument = this.listCollection.doc(this.currentuid).collection(this.currentuid).doc(item.id);
      //  this.listDocument = this.db.doc(`this.userdata.uid/${item.id}`);
      this.listDocument.delete();
    }

    fbupdateData(updateddata:Todolist){
      console.log(updateddata.id);
      this.listDocument = this.listCollection.doc(this.currentuid).collection(this.currentuid).doc(updateddata.id);
      this.listDocument.update(updateddata);
    }
    updatecategory(newcategory:String){
      console.log(newcategory);
      this.listDocument = this.listCollection.doc(this.currentuid);
      this.listDocument.update({
        categorylist: firestore.FieldValue.arrayUnion(newcategory)
    });
    console.log("added");
    }
  }
