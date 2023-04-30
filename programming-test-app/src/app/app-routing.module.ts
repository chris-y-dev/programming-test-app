import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAppComponent } from './modules/test-app/test-app/test-app.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { ResultPageComponent } from './modules/test-app/result-page/result-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'test/:mode/:topicId', component: TestAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
