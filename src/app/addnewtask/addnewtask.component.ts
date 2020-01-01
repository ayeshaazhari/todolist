import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { Observable } from 'rxjs';
import { Todolist ,colors ,statusarray , categoryarray , priorityarray} from '../module';

import { AngularFirestore } from '@angular/fire/firestore';
import { FbserviceService } from '../fbservice.service';
import { DialogOverviewExampleDialog } from '../maincontent/maincontent.component';

import { ToastrService } from 'ngx-toastr';


/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     return (control.invalid && control.touched);
//   }
// }

// export interface categorydata {
//  newcategory:string;
// }





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
  categoryarray = new Array();
  // categoryarray = ["HTML","CSS","Bootstrap","JavaScript","Angular" ];
  priorityarray = [ "High","Medium","Low" ];

  titlevalue;
  categoryvalue;
  priorityvalue;
  myform: FormGroup;

  // dialogue category
  newcategory;
  resultcatlist;
  catlist = new Array();

  constructor(private service:FbserviceService,private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit() {
    this.lists = this.service.getLists();
    this.service.getcatlist().subscribe(res => { 
    this.categoryarray = res.categorylist;
    });

    // form
    this.myform = this.formBuilder.group({
      'title': new FormControl("",Validators.required),
      'category': new FormControl("",Validators.required),
      'priority': new FormControl("",Validators.required),
      'description': new FormControl("",Validators.required),
      'strtdate': new FormControl("",Validators.required),
      'enddate': new FormControl("",Validators.required),
      'status': new FormControl("",Validators.required),
    });
  }

  showform(extrafield , title) {
    this.extrafield = extrafield;
    extrafield.style.display = "block";
    // title.placeholder = "Title";
  }

  remvform(extrafield,event) {
    if(event.path[0].className == "container my-4"){
      extrafield.style.display = "none";
    }
  }

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


  addtask(data,f){
    console.log(data);
    this.service.addData(data);
    
    if (this.myform.invalid) {
      return;
    }

    console.log('BEFORE reset', this.currentFormState());
    // f.resetForm();
    console.log('AFTER reset', this.currentFormState());
    this.extrafield.style.display = "none";
  }

  private currentFormState() {
    const formState = {
      dirty: this.myform.dirty,
      invalid: this.myform.invalid,
      pending: this.myform.pending,
      pristine: this.myform.pristine,
      status: this.myform.status,
      touched: this.myform.touched,
      untouched: this.myform.untouched,
      valid: this.myform.valid
    };

    return formState;
  }

  // matcher = new MyErrorStateMatcher();
  
  addcatagory(newcatbox){
    console.log("working");
    newcatbox.style.display = "block";
  }
  addnewcatagory(newcatbox,newcatboxdiv){
    this.newcategory =  newcatbox.value;
    newcatboxdiv.style.display = "none";
    console.log(newcatbox.value);
    newcatbox.value = "";
    this.service.updatecategory(this.newcategory);
    console.log("adding cat");
  }

  // tost
  showToaster(msg){
    this.toastr.success(msg);

  }
}
