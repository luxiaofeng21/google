import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  public user={
     type:"1",
     url:"111.com"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
