import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CTAComponent } from './components/cta/cta.component';
import { GraduatesWorkedInComponent } from './components/graduates-worked-in/graduates-worked-in.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseItemComponent } from './components/course/course-item/course-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    PartnersComponent,
    AboutUsComponent,
    CTAComponent,
    GraduatesWorkedInComponent,
    TestimonialComponent,
    CourseListComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
