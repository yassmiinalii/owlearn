import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from 'src/app/Models/icourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course:Icourse = {
    name: 'Product Management Basic - Course',

    category: 'Product Management',
    description:
      'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
    date: '1 - 28 July 2022',
    costAfterDiscount: 380,
    costBeforeDiscount: 500,
    enrollUsers: 120,
    image:
      'https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452808_1280.jpg',
  };

  // @Input() course: Icourse;
  constructor() { }

  ngOnInit(): void {
  }

}
