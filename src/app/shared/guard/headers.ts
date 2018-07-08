import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
if(localStorage.getItem('X-Auth-Token')){
    contentHeaders.append('X-Auth-Token',localStorage.getItem('X-Auth-Token'));
}