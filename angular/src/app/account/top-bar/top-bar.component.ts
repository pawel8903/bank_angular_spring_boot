import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css','../styles.css']
})
export class TopBarComponent implements OnInit {

  user: any = {}
  startTime: number = 600;
  actualleTime: string = "10:00";
  addNewAccount = false;


  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.time();
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  time() {

    let timeFunction = setTimeout(() => {
      this.startTime -= 1;
      
      let hour = Math.floor(this.startTime / 60);
      let minute = this.startTime - hour * 60;
      this.actualleTime = hour + ":" + minute;
      if (minute < 10) {
        let tmpMinute = "0" + minute;
        this.actualleTime = hour + ":" + tmpMinute;
      }
      this.time();
    }, 1000)

    if (this.startTime == 0) {
      this.logout();
      clearTimeout(timeFunction);
    }
  }

}
