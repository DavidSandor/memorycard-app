import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameCard } from 'src/app/_models/game-card.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() card: GameCard | undefined;
  @Output() cardClicked: EventEmitter<GameCard> = new EventEmitter<GameCard>();

  get imgPath(): string {
    return `assets/card-images/${this.card?.cardName}`;
  }

  constructor() { }

  ngOnInit(): void {

  }

  public onCardClick(): void {
    this.cardClicked.emit(this.card);
  }
}
