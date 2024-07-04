import { Component } from '@angular/core';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css',
})
export class SomaComponent {
  private res = 0;
  constructor(private somaService: SomaService) {}
  onClickSomar(n1: string, n2: string) {
    this.res = this.somaService.somar(parseFloat(n1), parseFloat(n2));
  }

  public get resultado(): string {
    return this.res.toString();
  }
}
