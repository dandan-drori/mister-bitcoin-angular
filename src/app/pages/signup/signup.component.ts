import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  name: string;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.signup(this.name);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {}
}
