import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css', '../styles.css']
})
export class ResetComponent implements OnInit {

  confirmPassword ='';
  user: any = {};
  wrongPassword ;
  wrongConfirm;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user)
    if (this.wrongConfirm && this.wrongPassword) {
      this.userService.updateUser(this.user).subscribe((result) => {

        console.log(result);
        this.router.navigate(["/login"]);
      })
    } else {
      alert('Proszę wypełnić prawidłowo pola');
    }
    
  }

  checkPassword() {
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,16}/.test(this.user.password)) {
      this.wrongPassword = true;
    } else this.wrongPassword = false;

  }

  checkConfirmPassword() {
    if (this.user.password != this.confirmPassword) {
      this.wrongConfirm = false;
    } else this.wrongConfirm = true;
  }

}
