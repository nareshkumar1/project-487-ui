import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClientHelper} from '../../shared/services';
import { contentHeaders } from '../../shared/guard';
 

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss'],
    animations: [routerTransition()]
})

export class NewUserComponent implements OnInit {
    data: any;
    userDetails: any;
    allDepartments: any;
    allDesignations: any;
    organizaton: any =JSON.parse(localStorage.getItem('userData'));
    
    constructor ( public httpClientHelper: HttpClientHelper){
        this.data = {
            userId :'',
            userFirstName:'',
            userLastName:'',
            username:'',
            password:'',
            email:'',
            phone:'',
            role:'',
            employeeId:'',
            joiningDate:'',
            department: '',
            designation:'',
            orgId:this.organizaton.orgId
        }
    }
    ngOnInit(){
        this.getAllDepartment();
    };

    saveUserProfile(){
        let dateString = this.data.joiningDate.year+"-"+this.data.joiningDate.month+"-"+this.data.joiningDate.day;
        let joinDate = new Date(dateString);
        let userFName = this.data.userFirstName;
        let userName = this.data.username;
        let userPassword = this.data.password;
        let userLName = this.data.userLastName;
        let userEmail = this.data.email;
        let empId = this.data.employeeId;
        let userPhone = this.data.phone;
        let userRole = this.data.role;
        let userDept = this.data.department;
        let userDesignation = this.data.designation;
        let organizatonId = this.data.orgId;
        
        let body =  JSON.stringify({userFName,userLName,userName,userPassword,joinDate,userEmail,empId,userPhone,userRole,userDept,userDesignation,organizatonId});

       this.httpClientHelper.post('/user/createUser',body,contentHeaders)
            .subscribe(
                response =>{
                        console.log(response.json());
                },
                error => {
                        console.log(error);
                }
            )
    }

    getAllDepartment(){
        this.httpClientHelper.get("/setup/organization/"+this.data.orgId+"/allDepartment",contentHeaders)
        .subscribe(
            response =>{
                this.allDepartments = response.json();
                console.log(this.allDepartments);
            },
            error =>{
                alert(error);
            }
        )
    }

    getDesignationsbyDepartment(event){
        if(event.target.value!=0){
            this.httpClientHelper.get("/setup/organization/"+this.data.orgId+"/department/"+event.target.value+"/allDesignation",contentHeaders)
            .subscribe(
            response =>{
                this.allDesignations = response.json();
                console.log(this.allDesignations);
            },
            error =>{
                this.allDesignations =[];
            }
        )
        }else{
            this.allDesignations =[];
        }
    }
}
