import { Component, OnInit  } from "@angular/core";
import { routerTransition } from '../../router.animations';
import { HttpClientHelper } from '../../shared/services'
import { contentHeaders } from '../../shared/guard/headers';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    animations: [routerTransition()]
})

export class EditProfileComponent implements OnInit {

    constructor (public httpClientHelper: HttpClientHelper){}

    userDetails:any;
    userId: any = JSON.parse(localStorage.getItem('userData'));

    ngOnInit(){
        this.getUserDetails();
    };

    getUserDetails(){
        this.httpClientHelper.post('/user/userDetails/'+this.userId.userId,{},contentHeaders)
        .subscribe(
            response =>{
                this.userDetails = response.json();
                console.log(this.userDetails);
            },
            error=>{
                alert("an error has occured");
            }
        )
    }

}