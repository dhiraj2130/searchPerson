import { PersonModuleComponent } from './person-module.component';
import { RouterModule } from '@angular/router';

const routes = [
    {path:'',component:PersonModuleComponent}
]

export default RouterModule.forChild(routes);