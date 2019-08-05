import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../styles.css']
})
export class LoginComponent implements OnInit {

  @Input() user: any = {};

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.userService.loginUser(this.user).subscribe((result) => {
 
      this.userService.changeValidation();
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate(['/account']);
    }, (err) => {
        alert("Niepoprawne dane logowania");
    }
    )
  }

}
