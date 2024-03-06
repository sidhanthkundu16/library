import { Component, OnInit } from '@angular/core';
import { SidButton } from 'projects/sid-library-ng/src/lib/types/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'library';
  buttonConfig: SidButton = {} as SidButton;
  
  
  ngOnInit(): void {
    this.buttonConfig = {
      label: "Test",
      float: 'right',
      color: "red",
      backgroundColor: "white"
    }
  }

}
