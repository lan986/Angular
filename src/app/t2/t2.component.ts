import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.css']
})
export class T2Component implements OnInit {
@Input() inputData ="";
  constructor() { }

  ngOnInit(): void {
  }

}
