import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAppDemo';
  
 deleteYesClick(event: any){    alert("yes");  }  deleteNoClick(event: any){    alert("no");  }


}
