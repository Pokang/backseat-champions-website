import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-slitbanners',
  templateUrl: './slitbanners.component.html',
  styleUrls: ['./slitbanners.component.scss']
})
export class SlitbannersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  // ngAfterViewInit(){
  //   AOS.init();
  // }

}
