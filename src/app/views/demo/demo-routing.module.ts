import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component, Demo02Component } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'demo-01', pathMatch: 'full' },
  { path: 'demo-01', component: Demo01Component },
  { path: 'demo-02', component: Demo02Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
