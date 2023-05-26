import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { CursosComponent } from './cursos/cursos.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';
import { VueComponent } from './vue/vue.component';

const routes: Routes = [
  { path: 'avaliacao', component: AvaliacaoComponent},
  { path: 'materiais', component: MateriaisComponent},
  { path: "cursos", 
    component: CursosComponent, 
    children: [
      { path: "angular/:pagina", component: AngularComponent},
      { path: "react", component: ReactComponent},
      { path: "vue", component: VueComponent},
    ] 
  },
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
