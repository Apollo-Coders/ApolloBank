import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-pix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-pix.component.html',
  styleUrl: './main-pix.component.css'
})
export class MainPixComponent {


  @Output() handleTransfer: EventEmitter<any> = new EventEmitter();




  


}
