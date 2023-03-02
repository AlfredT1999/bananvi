import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShow = true;
  title = 'bananvi';

  showHide(event: any) {
    if(event instanceof HomeComponent) {
      this.isShow=false
    } else { 
      this.isShow=true
    }
  } 
}
