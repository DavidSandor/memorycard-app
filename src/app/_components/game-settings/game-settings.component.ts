import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent implements OnInit {

  @Input() isHorizontal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
