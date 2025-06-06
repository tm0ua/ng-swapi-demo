import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsComponent } from './star-wars.component';

describe('StarWarsComponent', () => {
  let component: StarWarsComponent;
  let fixture: ComponentFixture<StarWarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarWarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
