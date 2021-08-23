import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = 'Jonathan';

  constructor() { }

  ngOnInit(): void {
  }

}
