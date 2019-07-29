import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TownService } from '../town.service';
import { UserService } from '../user.service';
import { catchError, window } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../styles.css']
})
export class RegisterComponent implements OnInit {

  @Input() user: any = {}
  country: any = [];
  wrongZip;
  wrongPassword;
  wrongConfirm;
  wrongCountry;
  constructor(public userSerivce: UserService, private townService: TownService,
     private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.townService.getTowns().subscribe((result) => {
      console.log(result);
      this.country = result;
    })
  }

  onSubmit() {
    if (this.wrongConfirm && this.wrongPassword && this.wrongZip && this.wrongCountry) {
     /* this.userSerivce.registerUser(this.user).subscribe((result) => {
        this.router.navigate(['/login'])
      }, (err) => {
        console.log(err);
      });*/
      this.userSerivce.registerUser(this.user).subscribe(() => {
        this.router.navigate(['/login']);
      }, err => {
          alert("Login zajęty");
      }
      )

    } else alert('Prosze poprawić pola');
    
  }

  checkZip() {

    if (/^([0-9]{2})+\-([0-9]{3})+$/.test(this.user.zip)) {
      this.wrongZip = true;
    } else this.wrongZip = false;
     
  }
  checkPassword() {
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,16}/.test(this.user.password)) {
      this.wrongPassword = true;
    } else this.wrongPassword = false;
    
  }

  checkConfirmPassword() {
    if (this.user.password != this.user.confirm) {
      this.wrongConfirm = false;
    } else this.wrongConfirm = true;
  }

  checkCountry() {
    if (this.user.town == undefined) { this.wrongCountry = false; } else this.wrongCountry = true;
  }

}
