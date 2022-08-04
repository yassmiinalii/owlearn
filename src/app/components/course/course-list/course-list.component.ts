import { ICategory } from 'src/app/Models/icategory';
import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from 'src/app/Models/icourse';
import { findIndex } from 'rxjs';

const categoryListArr: ICategory[] = [
  {
    name: 'Product Management',
    active: false,
  },
  {
    name: 'Web development',
    active: false,
  },
  {
    name: 'UI/UX Design',
    active: false,
  },
  {
    name: 'Branding Design',
    active: false,
  },
  {
    name: 'Mobile Development',
    active: false,
  },
];
const coursListArr: Icourse[] = [
  {
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
  },
  {
    name: 'Front End Developer - Basic',
    category: 'Web development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    date: '1 - 28 July 2022',
    costAfterDiscount: 380,
    costBeforeDiscount: 500,
    enrollUsers: 120,
    image:
      'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
  },
  {
    name: 'Back End Developerr -Basic',
    category: 'Web development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    date: '1 - 28 July 2022',
    costAfterDiscount: 380,
    costBeforeDiscount: 500,
    enrollUsers: 120,
    image:
      'https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg',
  },
  {
    name: 'UX Design - Branstroming',
    category: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    date: '1 - 28 July 2022',
    costAfterDiscount: 380,
    costBeforeDiscount: 500,
    enrollUsers: 120,
    image:
      'https://cdn.pixabay.com/photo/2017/04/14/17/22/lean-startup-2230822_1280.jpg',
  },
  {
    name: 'UI Design - Sketch',
    category: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    date: '1 - 28 July 2022',
    costAfterDiscount: 380,
    costBeforeDiscount: 500,
    enrollUsers: 120,
    image: 'https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg',
  },
  {
    name: 'Graphic Design - Fundamental Design',
    category: 'Branding Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.',
    date: '1 - 28 July 2022',
    costAfterDiscount: 380,
    costBeforeDiscount: 500,
    enrollUsers: 120,
    image:
      'https://cdn.pixabay.com/photo/2014/11/22/11/59/magnifying-glass-541625_1280.jpg',
  },
];

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  categoryList: ICategory[] = categoryListArr;
  courseList: Icourse[] = coursListArr;
  allCategoryActive: boolean = true;

  handleSelectedCategory(categoryName: string) {
    this.allCategoryActive = false;
    this.categoryList.forEach(function (categ) {
      categ.active = false;
    });

    this.courseList = coursListArr;
    const result = this.courseList.filter(
      (course) => course.category === categoryName
    );
    this.courseList = result;

    const index = this.categoryList.findIndex((el) => el.name === categoryName);
    this.categoryList[index].active = true;
  }

  handleSelecteAllCategory() {
    this.courseList = coursListArr;

    this.categoryList.forEach(function (categ) {
      categ.active = false;
    });
    this.allCategoryActive = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
