import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsofbooksComponent } from './detailsofbooks.component';

describe('DetailsofbooksComponent', () => {
  let component: DetailsofbooksComponent;
  let fixture: ComponentFixture<DetailsofbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsofbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsofbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
