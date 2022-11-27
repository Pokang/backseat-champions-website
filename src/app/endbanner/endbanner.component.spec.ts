import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndbannerComponent } from './endbanner.component';

describe('EndbannerComponent', () => {
  let component: EndbannerComponent;
  let fixture: ComponentFixture<EndbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
