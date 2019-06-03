import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onLogoutClick(){
    this.router.navigate(["./login"]);
  }

  public onCreateClick(){
    this.router.navigate(["./create"]);
  }

  public onModifyClick(){
    this.router.navigate(["./modify"]);
  }

  public onDisplayClick(){
    this.router.navigate(["./display"]);
  }

  public onDeleteClick(){
    this.router.navigate(["./delete"]);
  }


}
