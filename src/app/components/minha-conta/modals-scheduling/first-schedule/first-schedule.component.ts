import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-schedule',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './first-schedule.component.html',
  styleUrl: './first-schedule.component.css'
})
export class FirstScheduleComponent {

  scheduleForm!: FormGroup;

  @Output() scheduleFormSubmitted = new EventEmitter<void>();

  ngOnInit(){
    this.scheduleForm = new FormGroup({
      conta: new FormControl(''),
      valor: new FormControl(''),
      data: new FormControl('')

    })
  }

  onSubmit() {
    if (this.scheduleForm.valid) {
      this.scheduleForm.reset();
      this.scheduleFormSubmitted.emit();
    }


}

}
