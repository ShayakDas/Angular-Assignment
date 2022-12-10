import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttrackerComponent } from './posttracker.component';

describe('PosttrackerComponent', () => {
  let component: PosttrackerComponent;
  let fixture: ComponentFixture<PosttrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosttrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosttrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
