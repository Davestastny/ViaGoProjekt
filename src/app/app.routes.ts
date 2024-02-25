import {Routes} from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {ModelsComponent} from "./pages/models/models.component";

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'models', component: ModelsComponent},
];
