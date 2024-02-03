import { Component } from '@angular/core';
import { UtilsService } from 'projects/abcs-utils/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abcs';
  constructor(private utils: UtilsService){
    
  }
}
