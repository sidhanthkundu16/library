import { Component, Input, OnInit } from '@angular/core';
import { SidButton } from '../../types/button';

@Component({
  selector: 'lib-sid-button',
  templateUrl: './sid-button.component.html', 
  styleUrls: ['./sid-button.component.css']
})
export class SidButtonComponent implements OnInit {
  @Input() buttonConfig: SidButton  ={} as SidButton;
  constructor(){}
  ngOnInit(): void {
    console.log(this.buttonConfig);
  }
}
