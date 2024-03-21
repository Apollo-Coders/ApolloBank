import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {

  @Input() isOpen: boolean = false;
  @Input() modalTitle: string = '';
  @Output() closed = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {}

  closeModal() {
    this.isOpen = false;
    this.closed.emit()
    this.renderer.removeClass(document.documentElement, 'modal-open');

  }

  ngOnInit() {
    if(this.isOpen) {
      this.renderer.addClass(document.documentElement, 'modal-open');
    }
  }

}
