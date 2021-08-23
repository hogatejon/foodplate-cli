import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  altText: string = 'FoodPlate Logo';
  appVersionString: string = '1.0.0';
  appVersionNum: number = this.versionStringToNumber(this.appVersionString);
  icon: string = 'assets/images/icons/icons-29.png';
  isCurrent: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkForUpdateNeeded();
  }

  checkForUpdateNeeded() {
    if (this.appVersionNum <= 100) {
      this.isCurrent = false;
    }
  }

  private versionStringToNumber(version: string) {
    return parseInt(version.split('.').join(''), 10);
  }

}
