import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 formHandler = (event:Event) => {
    event.preventDefault()
    console.log("horm is handled")
    alert("form is handeled")
  };

}
