import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent} from  './new-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewUserRoutingModule} from  './new-user-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [ CommonModule, NewUserRoutingModule, PageHeaderModule,NgbModule.forRoot(),FormsModule,ReactiveFormsModule],
    declarations: [NewUserComponent]
})
export class NewUserModule {

}