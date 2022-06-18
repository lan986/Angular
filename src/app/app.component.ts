import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  itemImageUrl ="";
  item="nature";
    //for binding the style //
     navstyle='color:red;font-size:1.2rem';
     underline='underline';



     onclickbtn(value:any):void
{
console.log(value)
}
}
