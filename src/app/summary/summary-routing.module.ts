import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryShellComponent } from './container/summary-shell/summary-shell.component';

const routes: Routes = [
    {
        path: '', component: SummaryShellComponent, 
        children: [
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SummaryRoutingModule { }
