import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  errorMessage = ''
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
    const date = new Date
    const token = String(date.getUTCHours()).padStart(2, '0') + String(date.getUTCMinutes()).padStart(2, '0')
    
    const payload = {
      password,
      username,
      token
    }

    // TODO move api base url to env var
    // TODO change this to an observable
    this.http.post('https://localhost:8080/login', JSON.stringify(payload)).subscribe(
      (response) => {
        window.location.href = "https://onecause.com/"
      }, 
      (error) => this.errorMessage = error.error
    )
  }

}



