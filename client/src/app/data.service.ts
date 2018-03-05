import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { NavigationStart, Router } from '@angular/router';


@Injectable()
export class DataService {
  message = "";
  messageType = "danger";
  user: any;
  
  constructor(private router: Router, private rest: RestApiService) {
    this.router.events.subscribe(event => {
      
      if (event instanceof NavigationStart) {
        this.message = "";
      }

    });

   }

   error(message) {
     this.message = message;
     this.messageType = "danger";
   }

   success(message) {
     this.message = message;
     this.messageType = "success";
   }

   warning(message) {
    this.message = message;
    this.messageType = "warning";
   }

}
