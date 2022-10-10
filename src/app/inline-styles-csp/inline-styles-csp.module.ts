import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDomSharedStylesHost } from '../inline-styles-csp/shared_styles_host';
import { ɵDomSharedStylesHost } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'cspMetaSelector', useValue: 'meta[name="CSP-NONCE"]' },
    { provide: ɵDomSharedStylesHost, useClass: CustomDomSharedStylesHost },
  ]
})
export class InlineStylesCspModule { }
