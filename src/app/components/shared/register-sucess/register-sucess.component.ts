import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-sucess',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register-sucess.component.html',
  styleUrl: './register-sucess.component.css'
})
export class RegisterSucessComponent {
title: string = 'Cadastro criado!';
paragraph: string = 'Faça login na sua conta e desfrute de todos os benefícios e liberdade que o banco Apollo pode te fornecer!';
buttonText: string = 'Acesse sua conta';
}
