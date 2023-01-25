import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgcontainerComponent } from './msgcontainer.component';

describe('MsgcontainerComponent', () => {
  let component: MsgcontainerComponent;
  let fixture: ComponentFixture<MsgcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
