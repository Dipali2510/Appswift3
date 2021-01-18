import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestProject5SharedModule } from 'app/shared/shared.module';
import { TestProject5CoreModule } from 'app/core/core.module';
import { TestProject5AppRoutingModule } from './app-routing.module';
import { TestProject5HomeModule } from './home/home.module';
import { TestProject5EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestProject5SharedModule,
    TestProject5CoreModule,
    TestProject5HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestProject5EntityModule,
    TestProject5AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class TestProject5AppModule {}
