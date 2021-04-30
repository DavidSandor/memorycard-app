import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent {

  @Input() isHorizontal: boolean = false;

  private minDecksize: number = 6;
  private maxDecksize: number = 20;

  get deckSizeOptions(): number[] {

    const options: number[] = []

    for (let index = this.minDecksize; index < this.maxDecksize + 1; index += 2) {
      options.push(index);
    }

    return options;
  }

  public selectedDeckSize = 6;

  constructor(private gameService: GameService) { }

  public onStartNewGame(): void {
    this.gameService.startGame(this.selectedDeckSize)
  }
}