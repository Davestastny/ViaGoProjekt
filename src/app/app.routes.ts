import {Routes} from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {ModelsComponent} from "./pages/models/models.component";
import {NolicenseComponent} from "./pages/nolicense/nolicense.component";
import {LicenseComponent} from "./pages/license/license.component";

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'models', component: ModelsComponent},
  {path: 'nolicense', component: NolicenseComponent},
  {path: 'license', component: LicenseComponent},

];
