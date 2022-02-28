import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @Output() onInputChange: EventEmitter<any> = new EventEmitter<any>();

  nameFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  phoneFormControl = new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{9}')]);

  constructor() { }

  ngOnInit(): void {
  }

  handleInputChange(): void{
    const user = {name: this.nameFormControl, email: this.emailFormControl, phoneNumber: this.phoneFormControl}
    this.onInputChange.emit(user);
  }

}
