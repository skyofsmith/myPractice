import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HelloWorldComponent } from './hello-world/hello-world.component';
=======
>>>>>>> 42b7f006f925f3df321d7a0e4e98f81d5ba0fcb1

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
