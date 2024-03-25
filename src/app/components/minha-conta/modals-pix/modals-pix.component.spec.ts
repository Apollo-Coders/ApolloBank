import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsPixComponent } from './modals-pix.component';

describe('ModalsPixComponent', () => {
  let component: ModalsPixComponent;
  let fixture: ComponentFixture<ModalsPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalsPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
