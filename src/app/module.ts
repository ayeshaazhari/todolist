export interface Todolist {
    id?:string;
    title?:string;
    category?:string;
    description?:string;
    priority?:string;
    strtdate?:Date;
    enddate?:Date;
    status?:string;
  };

  export var colors = ["#f28b82", "#ffde7e" ,"fff475","#ccff90", "#a7ffeb","#cbf0f8","#aecbfa","#aecbfa","#d7aefb","#fdcfe8","#e6c9a8","#e8eaed","#fff" ];

  export var statusarray = [
  "Completed","Pending"
  ];
  export var categoryarray = [
    "HTML","CSS","Bootstrap","JavaScript","Angular"
  ];

   export var priorityarray = [
    "High","Medium","Low"
  ];

