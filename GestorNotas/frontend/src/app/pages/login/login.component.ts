import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  error: boolean = false;
  loading: boolean = false;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
      ]),
      clave: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onSubmit() :void{
    if (!this.loginForm.valid) {
      this.loginForm.reset();
      this.error = true;
      return;
    }
    this.loading = true;
    const data = this.loginForm.value;
    this.userService.login(data).subscribe(
      res => {
        this.loading = false;
        this.error = false
        this.router.navigate(['/home']);
      },
      error => {
        this.loginForm.reset();
        this.error = true;
        this.loading = false;
      }
    )
  }
}
