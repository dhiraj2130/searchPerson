import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonModuleComponent } from './person-module.component';
import  personRoutes from './person-module.routes';
import { PersonDetailsComponent} from '../person-details/person-details.component';
import { StoreModule } from '@ngrx/Store';
import { FormsModule } from '@angular/forms';
import { people } from './home.reducer';
import { PeopleAccessService } from './people-access.service';

@NgModule({
  imports: [
    CommonModule,personRoutes, FormsModule,
        StoreModule.provideStore({people})
  ],
  declarations: [PersonModuleComponent,PersonDetailsComponent],
  providers :[PeopleAccessService]
})
export default  class PersonModuleModule { }
