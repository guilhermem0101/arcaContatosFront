
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ContatosComponent } from './contatos/contatos.component';
import { VendasComponent } from './vendas/vendas.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

 
import { FirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabelaEspecialidadesComponent } from './funcionalidades/tabela-especialidades/tabela-especialidades.component';
import { CalculoDePlanosComponent } from './funcionalidades/calculo-de-planos/calculo-de-planos.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ContatosComponent,
    VendasComponent,
    LoginComponent,
    CadastroComponent,
    TabelaEspecialidadesComponent,
    CalculoDePlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    DividerModule,
    CheckboxModule,
    RadioButtonModule,    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    

  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
