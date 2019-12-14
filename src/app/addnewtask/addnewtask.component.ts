import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


import { Observable } from 'rxjs';
import { Todolist ,colors ,statusarray , categoryarray , priorityarray} from '../module';

import { AngularFirestore } from '@angular/fire/firestore';
import { FbserviceService } from '../fbservice.service';


@Component({
  selector: 'app-addnewtask',
  templateUrl: './addnewtask.component.html',
  styleUrls: ['./addnewtask.component.css']
})
export class AddnewtaskComponent implements OnInit {

  lists:Observable<Todolist[]>;

  extrafield;
  newItem:Todolist;

  statusarray = [ "Completed","Pending" ];
  categoryarray = ["HTML","CSS","Bootstrap","JavaScript","Angular" ];
  priorityarray = [ "High","Medium","Low" ];

  titlevalue;
  categoryvalue;
  priorityvalue;


  constructor(private service:FbserviceService) { }

  ngOnInit() {
    this.lists = this.service.getLists();
  }

  showform(extrafield , title) {
    this.extrafield = extrafield;
    console.log(extrafield);
    console.log("input tag");
    extrafield.style.display = "block";
    title.placeholder = "Title";
  }

  remvform(extrafield,event) {
if(event.path[0].className == "container my-4"){

    extrafield.style.display = "none";
    console.log(event.path[0].className);
  }
  }

  myform = new FormGroup({
    'title1': new FormControl("",Validators.required),
    'category1': new FormControl("",Validators.required),
    'priority1': new FormControl("",Validators.required),
    'description': new FormControl("",Validators.required),
    'strtdate': new FormControl("",Validators.required),
    'enddate': new FormControl("",Validators.required),
    'status': new FormControl("",Validators.required),
  });


get title1(){
  this.titlevalue = this.myform.get('title1').value;
  return this.myform.get('title1');
}

get category1(){
  return this.myform.get('category1').value;
}

get priority1(){
  return this.myform.get('priority1');
}

get description(){
  return this.myform.get('description');
}

get strtdate(){
  return this.myform.get('strtdate');
}

get enddate(){
  return this.myform.get('enddate');
}

get status(){
  return this.myform.get('status');
}

addtask(data){
  console.log(data);
  this.title1.setValue('');
  this.service.addData(data);
  
}





// fbadditem() { 
//   console.log(this.title);
//   if(this.title && this.category && this.priority && this.description && this.strtdate && this.enddate && this.status) {
//     // get the form fields and save in newItem object
//   this.newItem.title = this.title;
//   this.newItem.category = this.category;
//   this.newItem.priority = this.priority;
//   this.newItem.description = this.description;
//   this.newItem.strtdate = this.strtdate;
//   this.newItem.enddate = this.enddate;
//   this.newItem.status = this.status;

//   this.service.addData(this.newItem);

//   // Clear the form fields
//   this.title = "";
//   this.category="";
//   this.priority="";
//   this.description="";
//   this.strtdate = "";
//   this.enddate="";
//   this.status="";

//   // extrafield.style.display = "none";

// } else {
//   console.log("Enter data");
// }
// }


}
