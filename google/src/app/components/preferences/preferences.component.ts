import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  public clientHeight=0;
  constructor() { }

  ngOnInit(): void {
    this.clientHeight=window.innerHeight - 64
  }

}
