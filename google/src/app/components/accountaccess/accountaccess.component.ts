import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountaccess',
  templateUrl: './accountaccess.component.html',
  styleUrls: ['./accountaccess.component.scss']
})
export class AccountaccessComponent implements OnInit {
  public  clientHeight=0
  constructor() { }

  ngOnInit(): void {
    this.clientHeight=window.innerHeight - 64
  }

}

