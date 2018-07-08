import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Http } from '@angular/http';
import {contentHeaders} from '../shared/guard/headers';
import {HttpClientHelper} from '../shared/services';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,public http: Http, public httpClientHelper:HttpClientHelper) {}
    isLoading: boolean = false;
    ngOnInit() {}

    onLoggedin(event,userName,password) {
        event.preventDefault();
        let body =JSON.stringify({userName,password});
        this.httpClientHelper.post('/login',body,contentHeaders)
        .subscribe(
            response => {
                localStorage.setItem('X-Auth-Token',response.headers.get('X-Auth-Token'));
                console.log(localStorage.getItem('X-Auth-Token'));
                this.getData();
                if(this.isLoading==false){
                    this.router.navigate(['/dashboard']);
                }
            },
            
            error =>{
                alert(error.text());
                console.log(error.text());
            }
        )
    }

    getData(): any {
        this.isLoading=true;
        let url = '/user/basicInfo';
            this.httpClientHelper.get(url,contentHeaders)
            .subscribe(
            response =>{
                    localStorage.setItem('userData',response.text());
                    console.log("In request"+localStorage.getItem('userData'));
            },
            error =>{
                    console.log(error.text());
                    this.isLoading=false;
                }
            
            )
            this.isLoading=false;
        }
}
