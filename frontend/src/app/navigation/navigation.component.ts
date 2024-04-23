import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink, NgIf,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public showCategoryBar: boolean = true;

  constructor(private router: Router) {
    // Subscribe to router events to handle visibility of category bar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCategoryBar = (this.router.url === '/' || this.router.url === '/#');
      }
    });
  }
}
