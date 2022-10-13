import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studententry',
  templateUrl: './studententry.component.html',
  styleUrls: ['./studententry.component.css']
})
export class StudententryComponent implements OnInit {

  constructor() { }

  name=""
  rollNo=""
  college=""
  parentName=""
  dob=""
  admissionNo=""
  bloodgroup=""
  address=""
  mobile=""
  parentNo=""
  email=""

  readValues=()=>{
    let data={
      "name":this.name,
      "rollNo":this.rollNo,
      "college":this.college,
      "parentName":this.parentName,
      "dob":this.dob,
      "admissionNo":this.admissionNo,
      "bloodgroup":this.bloodgroup,
      "address":this.address,
      "mobile":this.mobile,
      "parentNo":this.parentNo,
      "email":this.email

    }

    console.log(data)
  }
 

  ngOnInit(): void {
  }

}
