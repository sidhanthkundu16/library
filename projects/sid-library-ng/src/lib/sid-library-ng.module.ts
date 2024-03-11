import { NgModule } from '@angular/core';
import { SidLibraryNgComponent } from './sid-library-ng.component';
import { SidButtonComponent } from './components/sid-button/sid-button.component';



@NgModule({
  declarations: [
    SidLibraryNgComponent,
    SidButtonComponent
  ],
  imports: [
  ],
  exports: [
    SidButtonComponent
  ]
})
export class SidLibraryNgModule { }
 