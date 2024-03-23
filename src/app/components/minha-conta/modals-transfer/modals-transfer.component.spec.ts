import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsTransferComponent } from './modals-transfer.component';

describe('ModalsTransferComponent', () => {
  let component: ModalsTransferComponent;
  let fixture: ComponentFixture<ModalsTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalsTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
