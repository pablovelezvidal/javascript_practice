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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalComponent } from '@app/modules/shared/modal/modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ModalComponent
        ],
        imports: [
          BrowserAnimationsModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not be visible by default', () => {
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    expect(div.hasAttribute('hidden')).toEqual(true);
  });

  it('should be visible when app is loading', () => {
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    fixture.detectChanges();

    expect(div.getAttribute('hidden')).toBeNull();
  });
});
