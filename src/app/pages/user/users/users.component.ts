import { Component, OnInit } from '@angular/core';
import { User, UserList } from '../user';
import { UsersService } from '../users.service';
import { BsModalService, PageChangedEvent } from 'ngx-bootstrap';
import { AddUserComponent } from '../add-user/add-user.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  usersList: UserList;
  itemsPerPage = 20;
  totalItems = 0;
  currentPage = 1;

  constructor(private userService: UsersService,
              public modalService: BsModalService) { }

  ngOnInit() {
    const pageEvent: PageChangedEvent = {page: this.currentPage, itemsPerPage: this.itemsPerPage};
    this.listUsers(pageEvent);
  }

  listUsers(event?: PageChangedEvent) {
    // const param:  = {
    //   start: (event.page - 1) * event.itemsPerPage,
    //   max: event.itemsPerPage,
    // };
    this.userService.getUsers().subscribe(
      result => {
        // 
      }
    );
  }

  addUser() {
    this.modalService.show(AddUserComponent);
    this.modalService.onHide.subscribe(
      () => {
       // 
      }
    );
  }

}
