import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Output() event: EventEmitter<any> = new EventEmitter();
    closeResult: string;
    public reports: Array<any> = [];
    currentUserEmail:String;

    constructor(private modalService: NgbModal) {}

    ngOnInit() {}

    open(content,reportType) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
       this.getCurrentUserEmail();
        console.log(reportType);
        console.log(this.currentUserEmail);
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    getCurrentUserEmail(){
       let basicInfo = JSON.parse(localStorage.getItem('userData'));
       this.currentUserEmail =basicInfo.userEmail;

    }
}
