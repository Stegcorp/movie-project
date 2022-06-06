import {Component, OnInit} from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDarkTheme(): void {
    const a = document.getElementsByClassName('header')[0];
    const b = document.getElementsByClassName('popular')[0];
    const f = document.getElementsByClassName('find')[0];
    const r = document.getElementsByClassName('rightPanel')[0];
    a.classList.toggle('dark-theme');
    b.classList.toggle('dark-theme');
    f.classList.toggle('dark-theme');
    r.classList.toggle('dark-theme');
  }
}
