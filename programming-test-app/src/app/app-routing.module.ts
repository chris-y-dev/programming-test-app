import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAppComponent } from './modules/test-app/test-app/test-app.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultPageComponent } from './modules/test-app/result-page/result-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test/:mode/:topicId', component: TestAppComponent },
  { path: 'result/:resultsId', component: ResultPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
