import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(
    private usersService: UsersService
    //, private counterService: CounterService
  ){}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    // old code... this.userSetToInactive.emit(id);
    console.log('active-users > onSetToInactive');
    this.usersService.setToInactive(id);
  }
}
