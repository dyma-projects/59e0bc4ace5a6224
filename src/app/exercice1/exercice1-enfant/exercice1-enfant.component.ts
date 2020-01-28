import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;
  @Output() compteurModified: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increment(): void {
    this.compteur++;
    this.compteurModified.emit(this.compteur);
  }
  decrement(): void {
    this.compteur--;
    this.compteurModified.emit(this.compteur);
  }

}
