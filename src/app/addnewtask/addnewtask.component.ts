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
    'title': new FormControl("",Validators.required),
    'category': new FormControl("",Validators.required),
    'priority': new FormControl("",Validators.required),
    'description': new FormControl("",Validators.required),
    'strtdate': new FormControl("",Validators.required),
    'enddate': new FormControl("",Validators.required),
    'status': new FormControl("",Validators.required),
  });


get title(){
  this.titlevalue = this.myform.get('title').value;
  return this.myform.get('title');
}

get category(){
  return this.myform.get('category').value;
}

get priority(){
  return this.myform.get('priority');
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
  this.title.setValue('');
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
