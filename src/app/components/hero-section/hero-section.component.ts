import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {

  reviewismage: string[] = [
    '../../../../assets/images/reviews/person1.png',
    '../../../../assets/images/reviews/person2.png',
    '../../../../assets/images/reviews/person3.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
