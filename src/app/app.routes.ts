
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [
    { path:'person',loadChildren:'./person-module/person-module.module'},
    { path:'',component:HomeComponent},
]

export default RouterModule.forRoot(routes);