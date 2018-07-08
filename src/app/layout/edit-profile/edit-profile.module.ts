import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { StatModule } from '../../shared';
import { PageHeaderModule } from './../../shared';

@NgModule({
        imports:  [
            CommonModule,
            NgbCarouselModule.forRoot(),
            NgbAlertModule.forRoot(),
            EditProfileRoutingModule,
            StatModule,
            PageHeaderModule
        ],
        declarations: [
            EditProfileComponent
        ]
})

export class EditProfileModule {}



