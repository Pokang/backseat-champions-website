import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlitbannersComponent } from './slitbanners.component';

describe('SlitbannersComponent', () => {
  let component: SlitbannersComponent;
  let fixture: ComponentFixture<SlitbannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlitbannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlitbannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
