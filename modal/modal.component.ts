/*===========================================================================
 =
 = Confidential and Proprietary
 =
 =  Argyle
 =
 = Copyright © BP3 Global Inc. 2018. All Rights Reserved.
 = This software is subject to copyright protection under
 = the laws of the United States and other countries.
 =
 ============================================================================*/
import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '@app/modules/shared/modal/modal.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @Input() public component: any = null;
  public dynamicComponent = null;
  public constructor(  public activeModal: NgbActiveModal ) {}

  public closeModal(): void {
    this.activeModal.close('Modal Closed');
  }

  public ngOnInit(): void {
      if ( this.component ) {
          this.dynamicComponent = this.component;
      }
  }
}
