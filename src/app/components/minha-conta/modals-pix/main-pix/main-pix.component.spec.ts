import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPixComponent } from './main-pix.component';

describe('MainPixComponent', () => {
  let component: MainPixComponent;
  let fixture: ComponentFixture<MainPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
