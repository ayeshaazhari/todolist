import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  // title;
  newItem:Todolist;

  

  statusarray = [
    "Completed","Pending"
    ];
    categoryarray = [
      "HTML","CSS","Bootstrap","JavaScript","Angular"
    ];
  
    priorityarray = [
      "High","Medium","Low"
    ]

  constructor(private service:FbserviceService) { }


  ngOnInit() {
    this.lists = this.service.getLists();

  }



  showform(extrafield , title) {
    this.extrafield = extrafield;
    // this.title = title;
    console.log(extrafield);
    console.log("input tag");
    extrafield.style.display = "block";
    title.placeholder = "Title";
  }

  rmvform(extrafield) {
    extrafield.style.display = "none";
  }

myform = new FormGroup({
  'title': new FormControl("",Validators.required),
  'category': new FormControl("",Validators.required),
  'priority': new FormControl("",Validators.required),
  'description': new FormControl("",Validators.required),
  'startdate': new FormControl("",Validators.required),
  'enddate': new FormControl("",Validators.required),
  'satus': new FormControl("",Validators.required)
});

get title(){
  return this.myform.get('title');
}

get category(){
  return this.myform.get('title');
}

get priority(){
  return this.myform.get('priority');
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
