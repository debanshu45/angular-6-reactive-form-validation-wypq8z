import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    public isSaving = false

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }else{
          this.isSaving = true;
          setTimeout(() =>{
            this.isSaving = false;
            this.registerForm.reset();
            this.registerForm.get('firstName').clearValidators();
            this.registerForm.get('firstName').updateValueAndValidity();
            this.registerForm.get('lastName').clearValidators();
            this.registerForm.get('lastName').updateValueAndValidity();
          },2000)
        }
    }
}
