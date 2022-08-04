import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partnersImage: string[] = [
    ' ../../../../assets/images/partners/partner1.png',
    '../../../../assets/images/partners/partner2.png',
    '../../../../assets/images/partners/partner3.png',
    '../../../../assets/images/partners/partner4.png',
    '../../../../assets/images/partners/partner5.png',
  ];

  constructor() {}
  ngOnInit(): void {}
}
