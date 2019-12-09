import { Component, OnInit , Inject } from '@angular/core';
import { FbserviceService } from '../fbservice.service';
import { Observable } from 'rxjs';
import { Todolist ,colors ,statusarray , categoryarray , priorityarray} from '../module';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { isNgTemplate } from '@angular/compiler';
import {MatSelectModule} from '@angular/material/select';
import { filter } from 'minimatch';
import {FormControl} from '@angular/forms';


export interface DialogData {
  title:string,
  category:string,
  priority:string,
  description:string
}

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  data;
  updateddata;
  resultData;
  cardcolor;
  toggleview = false;
  editvalues;
  filtered = new Array();
  searched = new Array();
  searchvalue;

  statusarray = [ "Completed","Pending" ];
  categoryarray = ["HTML","CSS","Bootstrap","JavaScript","Angular" ];
  priorityarray = [ "High","Medium","Low" ];


  lists:Observable<Todolist[]>;

  title;
  category;
  priority;
  description;
  strtdate;
  enddate;
  status;

  chngColor = 0;
  // colors = ["#f28b82", "#ffde7e" ,"fff475","#ccff90", "#a7ffeb","#cbf0f8","#aecbfa","#aecbfa","#d7aefb","#fdcfe8","#e6c9a8","#e8eaed","#fff" ];

  filtervalue;

 

  newItem:Todolist = {
    title:this.title,
    category:this.category,
    priority:this.priority,
    description:this.description,
    strtdate:this.strtdate,
    enddate:this.enddate,
    status:this.status,
  };
  // gotData;

  constructor(private service:FbserviceService , public dialog: MatDialog) { }

  ngOnInit() {
    // this.lists = this.service.getLists();
    this.service.getLists().subscribe(result => {
      console.log(result);
      this.resultData = result;
      this.filtered = result;
  });
  }

  // showform(extrafield , title) {
  //   this.extrafield = extrafield;
  //   console.log(extrafield);
  //   console.log("input tag");
  //   extrafield.style.display = "block";
  //   title.placeholder = "Title";

  // }

  remvform(extrafield) {
    extrafield.style.display = "none";
  }

  fbadditem() { 
    console.log(this.title);
    if(this.title && this.category && this.priority && this.description && this.strtdate && this.enddate && this.status) {
      // get the form fields and save in newItem object
    this.newItem.title = this.title;
    this.newItem.category = this.category;
    this.newItem.priority = this.priority;
    this.newItem.description = this.description;
    this.newItem.strtdate = this.strtdate;
    this.newItem.enddate = this.enddate;
    this.newItem.status = this.status;

    this.service.addData(this.newItem);

    // Clear the form fields
    this.title = "";
    this.category="";
    this.priority="";
    this.description="";
    this.strtdate = "";
    this.enddate="";
    this.status="";

    // extrafield.style.display = "none";

  } else {
    console.log("Enter data");
  }
  }

  fbdeleteItem(item){
    this.service.deleteData(item);
  }

  chngcolor(editvalues) {
    if(this.chngColor == 12){
      this.chngColor =0;
    } else {
      console.log(editvalues);
      editvalues.style.backgroundColor = colors[this.chngColor];
    }
    this.chngColor++;
  }

  tblview(itemdiv ,icon) {
    this.toggleview =!this.toggleview;
    if(this.toggleview) {
    icon.removeAttribute("class");
    icon.setAttribute("class" , "lni-grid-alt");
    itemdiv.style.columnCount = "1";
  } else {
    icon.removeAttribute("class");
    icon.setAttribute("class" , "lni-list");
    itemdiv.style.columnCount = "3";
  }
  }

//   onChange(value){
//   console.log("f " + typeof(value.value) + " " + value.value.length + " a " + value.value);
//   var b = value.value;
//   for(let i in b){
//     for(let onedata in this.resultData){
//         var allcategory = this.resultData[onedata].category;
//         var allpriority = this.resultData[onedata].priority;
//         var allstatus = this.resultData[onedata].status;
      
//         for(let j=0;j<allcategory.length;j++){
//             console.log("filter " + b[i] + " cat " + allcategory);
//             if(b[i] == allcategory) {
//                  console.log("selected "+ JSON.stringify(this.resultData[j]));
//                  break;
//             }
//         } 
//     }
//   }
//   }

onChange(value){
    this.filtered = [];
    var filterproerties = value.value;
    var allcategory = new Array();
    var allpriority = new Array();
    var allstatus= new Array();
    var sameid= new Array();


    for(let onedata in this.resultData){
        // console.log(onedata);
       var  fbcategory = this.resultData[onedata].category;
       var  fbpriority = this.resultData[onedata].priority;
       var  fbstatus = this.resultData[onedata].status;
       var  fid = this.resultData[onedata].id;
        for(let a in filterproerties){
            if(filterproerties[a]== fbcategory || filterproerties[a]== fbpriority || filterproerties[a] == fbstatus){
            for(let b in this.filtered){
            if(this.filtered[b].id == fid) {
                console.log("same id " + fid +" " + this.filtered[b].id);
                this.filtered.pop();
            } else {
                sameid.push(fid);
            }
        }
              this.filtered.push(this.resultData[onedata]);
         
          }
        }
    }
}

// search 
searchonenter(event){
  this.searched = [];
  let searchidlist = new Array;
  if(event.keyCode == 13) {
    for(let k=0; k < this.filtered.length; k++) {
      let list = this.filtered[k];
      let title = list.title;
      let category = list.category;
      let priority = list.priority;
      let description = list.description;
      let status = list.status;

      if(title.includes(this.searchvalue) || category.includes(this.searchvalue) || priority.includes(this.searchvalue) || description.includes(this.searchvalue)|| status.includes(this.searchvalue) ){
        this.searched.push(list);
      } 
    }
    this.filtered= this.searched;
  }

  if(!this.searchvalue){
  this.filtered = this.resultData;
  }
}

  filtertag = new FormControl();







openDialog(item:Todolist): void {
  // console.log(item);
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '40%',
    data: {
      id:item.id,
      title: item.title,
      category: item.category,
      priority:item.priority,
      description:item.description,
      strtdate:item.strtdate,
      enddate:item.enddate,
      status:item.status
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    this.updateddata = result;
    console.log('The dialog was closed' + this.updateddata.title);

  });
}

}

@Component({
selector: 'dialog-overview-example-dialog',
templateUrl: 'dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialog {

constructor(
  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData, private service:FbserviceService,db:AngularFirestore) {}

onNoClick(): void {
  this.dialogRef.close();
}

updateddata(item:Todolist) {
  // item.title = this.data.title;
  console.log("item "+ item.id);
  this.service.fbupdateData(item);
}

}
