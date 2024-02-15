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
title: string = 'Cadastro realizado com sucesso!';
paragraph: string = 'Agora você já pode acessar sua conta!';
}
