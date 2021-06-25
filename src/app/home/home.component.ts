import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        let errObj = JSON.parse(err);
        // if(errObj.ErrorCode==404){
        //   this.content = "The request url not found"
        // }
        this.content = errObj.Message.split(':')[3];

      }
    );
  }
}
