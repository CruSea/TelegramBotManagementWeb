import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ModalComponent } from './pages/modal/modal.component';
import { NgxModuleModule } from './shared/ngx-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AddCategoryComponent } from './pages/categorie/add-category/add-category.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxModuleModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AddCategoryComponent,
    ModalComponent,
    AddUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, AddUserComponent]

})
export class AppModule { }
