import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SupportComponent } from "./support/support.component";

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    {
        path: 'support', component: SupportComponent
    },
    {path: '**', redirectTo: ''}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}