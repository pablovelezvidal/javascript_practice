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
import { inject, TestBed } from '@angular/core/testing';
import { ModalService } from '@app/modules/shared/modal/modal.service';

describe('ModalService', () => {
  let modalService: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService]
    });
  });

  beforeEach(inject([
    ModalService
  ], (_modalService: ModalService) => {
    modalService = _modalService;
  }));
});
