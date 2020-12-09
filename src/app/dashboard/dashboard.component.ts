import { Component, OnInit } from '@angular/core';
import {Data} from '../data';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name="";

  data:Data=<any>[];
  editable=false;
  addButton="ADD"
  editableIndex='';
  constructor() { }

  ngOnInit(): void {
  }

  Add(){
    if(this.editable===true){

      const DataList:Data={
        name:this.name,
        editable:this.editable
      }
      this.data.splice(this.editableIndex,1,DataList);
      this.addButton="ADD";
      this.editable=false;

    }else{
      const DataList:Data={
        name:this.name,
        editable:this.editable
      }
      this.data.splice(0,0,DataList)
      this.name="";
    }

  }

  Delete(index){
    this.data.splice(index,1)
  }

  Edit(item,index){
    this.editable=true;
    this.addButton="UPDATE";
    this.name=item;
    this.editableIndex=index
  }

}
