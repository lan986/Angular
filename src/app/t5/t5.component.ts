import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-t5',
  templateUrl: './t5.component.html',
  styleUrls: ['./t5.component.css']
})
export class T5Component implements OnInit {
@Input() inputData='';
  constructor() { }

  ngOnInit(): void {
  }
}
