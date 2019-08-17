import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSharedService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router,
      private appSharedService: AppSharedService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onSubmit() {
      console.log(this.loginForm.get('username').value);
      this.appSharedService.saveData(this.loginForm.get('username').value); 
      this.router.navigate(['support']);
    }

}
