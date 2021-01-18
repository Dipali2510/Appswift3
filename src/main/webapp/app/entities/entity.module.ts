import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'table-1',
        loadChildren: () => import('./table-1/table-1.module').then(m => m.TestProject5Table1Module),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TestProject5EntityModule {}
