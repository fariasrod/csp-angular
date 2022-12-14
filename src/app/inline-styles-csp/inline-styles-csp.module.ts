import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDomSharedStylesHost } from '../inline-styles-csp/shared_styles_host';
import { ÉµDomSharedStylesHost } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'cspMetaSelector', useValue: 'meta[name="CSP-NONCE"]' },
    { provide: ÉµDomSharedStylesHost, useClass: CustomDomSharedStylesHost },
  ]
})
export class InlineStylesCspModule { }
