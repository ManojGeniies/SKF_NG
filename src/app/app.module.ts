import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './banner/banner.component';
import { FeatureAreaComponent } from './feature-area/feature-area.component';
import { FooterComponent } from './footer/footer.component';
import { PageCoursesComponent } from './page-courses/page-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    BannerComponent,
    FeatureAreaComponent,
    FooterComponent,
    PageCoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
