import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;
  toggleText(){
    this.showText = !this.showText;
  
  }

  staff = [ 
    { firstName: 'Daryll', lastName: 'Medina', email: 'damedina@gmail.com', role: 'User' },   
    { firstName: 'Aron', lastName: 'Layson', email: 'aronlayson.com', role: 'Admin' }, 
    { firstName: 'Miguel', lastName: 'Enriquez', email: 'jmenriquez.com', role: 'Admin' }, 
    { firstName: 'Kenj', lastName: 'Jaculbia', email: 'kenkjaculbia.com', role: 'User' }, 
    { firstName: 'JJ', lastName: 'Stein', email: 'jjstein.com', role: 'User' } 
    ];
}

