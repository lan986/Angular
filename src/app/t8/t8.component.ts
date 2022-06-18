import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-t8',
  templateUrl: './t8.component.html',
  styleUrls: ['./t8.component.css']
})
export class T8Component implements OnInit {
@Output() sendData = new EventEmitter<any>();// 8 in this line is child for  3 


  constructor() { }

  ngOnInit(): void {
  }
 sendclick(){
  console.log("emitted from 8")
    this.sendData.emit("angularn")
  }

}
