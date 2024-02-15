import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsequentFormComponent } from './subsequent-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('SubsequentFormComponent', () => {
  let component: SubsequentFormComponent;
  let fixture: ComponentFixture<SubsequentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsequentFormComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubsequentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
