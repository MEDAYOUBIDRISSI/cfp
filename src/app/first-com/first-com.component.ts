import { Component, OnInit } from '@angular/core';
import {TestServiceService} from './test-service.service'


@Component({
  selector: 'app-first-com',
  templateUrl: './first-com.component.html',
  styleUrls: ['./first-com.component.scss']
})
export class FirstComComponent implements OnInit {

  verify=true;
  listUser:any[]=[]
  constructor(private testServiceService:TestServiceService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  show(){
    this.verify=!this.verify;
    console.log("i m here")
  }

  getTodos(){
    this.testServiceService.getTodos().subscribe(data => {
      this.listUser=data
      console.log("this is data 2: ",this.listUser)
    })
  }

}
