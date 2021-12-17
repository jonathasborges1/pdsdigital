import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  defaultImage =  '/assets/img/coringa.png';
  coffeimg = `/assets/img/coffeicon.png`;
  fogueteimg = `/assets/img/logotipoFoguete.png`;
  pdsdigital = `/assets/img/pdsdigital.png`;

  constructor() { }

  ngOnInit(): void {
  }

}
