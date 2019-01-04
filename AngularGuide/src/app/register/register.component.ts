
import { Component, OnInit} from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrls: [`./register.component.css`]
})

export class RegisterComponent implements OnInit{
    
    signUpforms:FormGroup;
ngOnInit(){
this.signUpforms=new FormGroup({
    'firstName': new FormControl(null,Validators.required),
    'lastName': new FormControl(null,Validators.required),
    'address': new FormControl(null,Validators.required),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'password': new FormControl(null,Validators.required),
    'gender': new FormControl("male"),
    'DOB': new FormControl(null,Validators.required),
})
}
onSubmit(){
    console.log(this.signUpforms);
}
submitResister(){
    alert("Hi Welcome")
}
}   