import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {
recivedData='';
  constructor() { }
 
  ngOnInit(): void {}
 datareceived(data:string):void{
    console.log("data recevied in 1");
    this.recivedData=data;

  }
  }

