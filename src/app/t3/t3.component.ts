import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.css']
})
export class T3Component implements OnInit {
@Output()sendData=new EventEmitter<any>(); // 3 in this line is child for 1 output for 1
  constructor() { }

message="";

  ngOnInit(): void {
  }
datareceived(data:string):void{
  console.log("emitted from 3")
  this.sendData.emit(data)
}
}
