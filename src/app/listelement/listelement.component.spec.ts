import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelementComponent } from './listelement.component';

describe('ListelementComponent', () => {
  let component: ListelementComponent;
  let fixture: ComponentFixture<ListelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
