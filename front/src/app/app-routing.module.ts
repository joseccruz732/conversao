import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversaoComponent } from './modules/conversao/conversao.component';

const routes: Routes = [
  {
    path: '',
    component: ConversaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
