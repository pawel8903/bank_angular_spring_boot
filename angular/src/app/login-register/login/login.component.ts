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
    this.userService.getUserByLogin(this.user.login).subscribe((result) => {
      if (this.user.password == result.password) {
        this.router.navigate(['/account']);
        localStorage.setItem('user', JSON.stringify(result));
      } else {
        alert('Nie poprawne dane logowania. Proszę sprawdzić poprawność wprowadzonych danych');
      }
    }
    )
  }

}
