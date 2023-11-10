import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCoursesComponent } from './page-courses.component';

describe('PageCoursesComponent', () => {
  let component: PageCoursesComponent;
  let fixture: ComponentFixture<PageCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCoursesComponent]
    });
    fixture = TestBed.createComponent(PageCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
