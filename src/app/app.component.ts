import { Component } from '@angular/core';
import { UsersService } from './services/users.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
  existing code...
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  ...replaced by...
  */
  activeUsers: string[]; // one way to declare an array of strings
  inactiveUsers: Array<string>; // another way to declare an array of strings

  // declaring usersService as a property of this component
  constructor(private usersService: UsersService){} 

  // setting this property here TODO: explain why
  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  // we should only need one method here
  changeStatus(name: string){
    console.log('app.component > changeStatus');
    this.usersService.changeStatus(name);
  }

  /* existing code...
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  */
}
