import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofbooksComponent } from './listofbooks.component';

describe('ListofbooksComponent', () => {
  let component: ListofbooksComponent;
  let fixture: ComponentFixture<ListofbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
