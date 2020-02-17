import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';


const routes: Routes =[
  { path: 'data', component: DataComponent },
  { path: 'template', component: TemplateComponent },
  { path: '**', component: TemplateComponent },
  { path: '', redirectTo: 'data', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
