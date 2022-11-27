import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComicsComponent } from './character-comics.component';

describe('CharacterComicsComponent', () => {
  let component: CharacterComicsComponent;
  let fixture: ComponentFixture<CharacterComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});