import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductShellComponent } from './container/product-shell/product-shell.component';
import { ProductListComponent } from './component/product-list/product-list.component';


const routes: Routes = [
    {
        path: '', component: ProductShellComponent, 
        children: [
            { path: '/:id', component: ProductListComponent },
            { path: 'list', component: ProductListComponent },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
