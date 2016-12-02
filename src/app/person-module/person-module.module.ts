import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonModuleComponent } from './person-module.component';
import  personRoutes from './person-module.routes';
import { PersonDetailsComponent} from '../person-details/person-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,personRoutes, FormsModule
  ],
  declarations: [PersonModuleComponent,PersonDetailsComponent]
})
export default  class PersonModuleModule { }
