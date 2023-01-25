import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MsgcontainerComponent } from './msgcontainer/msgcontainer.component';
import { SearchComponent } from './search/search.component';
import { ListelementComponent } from './listelement/listelement.component';
import { NameBoxComponent } from './name-box/name-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MsgcontainerComponent,
    SearchComponent,
    ListelementComponent,
    NameBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
