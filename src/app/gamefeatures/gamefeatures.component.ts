import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-gamefeatures',
  templateUrl: './gamefeatures.component.html',
  styleUrls: ['./gamefeatures.component.scss']
})
export class GamefeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
