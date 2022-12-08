import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-steambanner',
  templateUrl: './steambanner.component.html',
  styleUrls: ['./steambanner.component.scss']
})
export class SteambannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
