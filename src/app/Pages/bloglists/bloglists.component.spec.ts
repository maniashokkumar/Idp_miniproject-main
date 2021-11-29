import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistsComponent } from './bloglists.component';

describe('BloglistsComponent', () => {
  let component: BloglistsComponent;
  let fixture: ComponentFixture<BloglistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloglistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
