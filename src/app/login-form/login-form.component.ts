import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    // TODO add validators to these form fields such as required and username must be an email
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
   }

  ngOnInit() {}

  submitForm() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    const token = '1234'
    
    const payload = {
      password,
      username,
      token
    }

    // TODO move api base url to env var
    // TODO change this to an observable
    this.http.post('http://localhost:8080/login', JSON.stringify(payload)).subscribe(
      (response) => console.log(response), 
      (error) =>console.log(error)
    )
  }

}



