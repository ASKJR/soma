import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomaService {
  constructor() {}

  public somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
}