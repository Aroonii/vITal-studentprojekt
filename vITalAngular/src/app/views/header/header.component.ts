import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {FeedDataService} from '../../services/feed-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  showPatient: boolean;
  pid: string;
  h: string;

  constructor(
      private location: Location,
      private router: Router,
      private feedData: FeedDataService
      ) { }

  private goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.routeEvent();
    this.getPid();
    this.h = 'bla';
  }

  public goToLogout() {
    this.router.navigate(['/logout']);
  }

  routeEvent(){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        const currentLocation = event.url;
        this.isLoggedIn = !(currentLocation === '/login' || currentLocation === '/');
        this.showPatient = currentLocation === '/history' || currentLocation.substring(0, 5) === '/pid/';
      }
    });
  }

  getPid() {
    this.feedData.getPid().subscribe(pid => {
      this.pid = pid;
      console.log(pid);
    });
  }


}
