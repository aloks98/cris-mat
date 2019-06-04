import { Component, OnInit } from '@angular/core';


export interface Server {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  servers: Server[] = [
    {value: '1', viewValue: 'TCP/IP'},
    {value: '2', viewValue: 'ThinClient'},
    {value: '3', viewValue: 'DEC'}
  ];

}
