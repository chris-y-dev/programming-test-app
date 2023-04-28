import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
