import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestProject5SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [TestProject5SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class TestProject5HomeModule {}
