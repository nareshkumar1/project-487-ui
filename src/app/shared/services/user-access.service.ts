import { Injectable } from '@angular/core';
import { HttpClientHelper } from './http-client.service'
import {contentHeaders} from '../../shared/guard';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class UserAccessService {

    constructor(public httpClientService: HttpClientHelper){}
    

    getUserProfile() {
       
}

}
