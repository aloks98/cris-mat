import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public onLoginClick(form){
    if(form.value.username=='alok' && form.value.password=='alok'){
      this.router.navigate(['./home']);
    }
    else{
      alert("Wrong Username/Password. Try Again!");
    }
  }

  ngOnInit() {
  }

  

}
