import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Http } from '@angular/http';
import {contentHeaders} from '../../../shared/guard';
import {HttpClientHelper} from '../../../shared/services';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/Observable/of'; 



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    basicInfo :any;
    isLoading : boolean =false;

    constructor(private translate: TranslateService, public router: Router, public http: Http,public httpClientHelper:HttpClientHelper) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.getBasicData();
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        let url = '/user/logout';
        this.httpClientHelper.get(url,contentHeaders)
        .subscribe(
            response =>{
                localStorage.clear();
                console.log(localStorage.getItem('X-Auth-Token'));
            },
            error => {
                alert(error);
            }
        )
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    getBasicData() {
         
        this.basicInfo = JSON.parse(localStorage.getItem('userData'));
        console.log("In request"+this.basicInfo);
    }
}