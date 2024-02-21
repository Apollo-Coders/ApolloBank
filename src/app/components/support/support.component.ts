import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  navbarButton = 'Acesse sua conta';
  route = "/login"

  fluidTexts: string[] = [
    "Somos o Grupo Apollo, inspirados pela saga  das missões espaciais Apollo, buscamos constantemente superar fronteiras. Com uma equipe diversificada de especialistas em tecnologia, ciência e inovação, estamos impulsionando os limites do conhecimento humano e desbravando novos caminhos em direção ao futuro. Junte-se a nós nesta jornada cósmica, onde cada desafio nos aproxima um passo mais perto das estrelas.",
    "Somos uma fintech impulsionada pela paixão por desafiar o convencional e elevar os padrões do setor. Com uma equipe de mentes brilhantes e uma abordagem centrada no cliente, estamos moldando um novo horizonte financeiro, capacitando nossos clientes a alcançarem seu potencial máximo. Junte-se a nós nesta jornada rumo a um futuro financeiro mais brilhante, onde o espaço é o limite e a Apollo Bank é a estrela guia.",
    "Na Apollo Bank, seguimos rigorosamente as regulamentações bancárias e as leis vigentes para determinar quem pode abrir uma conta. Para abrir uma conta pessoal, você deve ter pelo menos 18 anos de idade e ser um residente legal do país em que operamos. Além disso, você precisará fornecer documentos de identificação válidos, como carteira de identidade ou passaporte, comprovante de endereço e outras informações pertinentes conforme exigido pelas regulamentações locais.",
    
  ];

  expandedItems: { [key: string]: boolean } = {};

  toggleCollapse(collapseId: string): void {
   
    Object.keys(this.expandedItems).forEach(id => {
      if (id !== collapseId) {
        this.expandedItems[id] = false;
      }
    });

    
    this.expandedItems[collapseId] = !this.expandedItems[collapseId];
  }

  isExpanded(collapseId: string): boolean {
    return this.expandedItems[collapseId] ?? false;
  }

}
