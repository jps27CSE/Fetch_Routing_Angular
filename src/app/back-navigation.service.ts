import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackNavigationService {

  constructor() { }

  confirmBackNavigation():boolean{
    const confirmed = window.confirm('Are you sure you want to go back?');
    return confirmed;
  }

}
