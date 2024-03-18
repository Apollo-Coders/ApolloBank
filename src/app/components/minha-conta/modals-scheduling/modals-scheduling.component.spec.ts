import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsSchedulingComponent } from './modals-scheduling.component';

describe('ModalsSchedulingComponent', () => {
  let component: ModalsSchedulingComponent;
  let fixture: ComponentFixture<ModalsSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsSchedulingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalsSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
