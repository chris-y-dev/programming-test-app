import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAppComponent } from './pages/test-app/test-app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
