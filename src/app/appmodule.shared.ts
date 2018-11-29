import { NgModule } from '@angular/core';  
//import { EmployeeService } from './services/empservice.service'  
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';  
import { RouterModule } from '@angular/router';  
  
//import { AppComponent } from './components/app/app.component';  
//import { NavMenuComponent } from './components/navmenu/navmenu.component';  
import { HomeComponent } from '../app/home/home.component';  
import{SearchComponent} from '../app/search/search.component'; 
//import {SearchService} from '../app/search/search';
//import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee.component'  
//import { createemployee } from './components/addemployee/AddEmployee.component'  
  
@NgModule({  
    declarations: [  
       // AppComponent,  
        //NavMenuComponent,  
        HomeComponent,  
        SearchComponent,
        //FetchEmployeeComponent,  
       // createemployee, 

    ],  
    imports: [  
        CommonModule,  
        HttpModule,  
        FormsModule,  
        ReactiveFormsModule,  
        RouterModule.forRoot([  
            { path: '', redirectTo: 'home', pathMatch: 'full' },  
            { path: 'home', component: HomeComponent }, 
            { path: 'search', component: SearchComponent },  
 
            //{ path: 'fetch-employee', component: FetchEmployeeComponent },  
          //  { path: 'register-employee', component: createemployee },  
            //{ path: 'employee/edit/:id', component: createemployee },  
            { path: '**', redirectTo: 'home' }  
        ])  
    ],  
    //providers: [SearchService]  
})  
export class AppModuleShared {  
}