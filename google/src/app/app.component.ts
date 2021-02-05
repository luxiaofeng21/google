import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google';
  ngOnInit() {
       registerLocaleData(zh)
  }
}
