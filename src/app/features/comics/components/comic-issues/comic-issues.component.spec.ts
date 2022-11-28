import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicIssuesComponent } from './comic-issues.component';

describe('ComicIssuesComponent', () => {
  let component: ComicIssuesComponent;
  let fixture: ComponentFixture<ComicIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
