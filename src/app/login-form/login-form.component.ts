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
    const formData: any = new FormData();
    formData.append('username', this.form.get('username')?.value);
    formData.append('password', this.form.get('password')?.value);
    // TODO move api base url to env var
    this.http.post('http://localhost:8080/login', formData).subscribe(
      (response) => console.log(response), 
      (error) =>console.log(error)
    )
  }

}



