import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

  accountDetailsForm: FormGroup;

  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    // 'password': [
    //   { type: 'required', message: 'Password is required' }
    // ]
   'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ]
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {

    this.accountDetailsForm = this.fb.group({
      username: new FormControl('', Validators.compose([
       Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
        // Validators.pattern("[A-Za-z]{3}")
      ]))
    })
  }

  onSubmitAccountDetails(value){
    console.log(value);
  }

}
