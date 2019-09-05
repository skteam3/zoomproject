import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';

import { KbdisplayarticleComponent } from './kbdisplayarticle/kbdisplayarticle.component';
import { AddarticleComponent } from './kbdisplayarticle/addarticle/addarticle.component';
import { EditarticleComponent } from './kbdisplayarticle/editarticle/editarticle.component';
import { SearcharticleComponent } from './kbdisplayarticle/searcharticle/searcharticle.component';
import { FormsModule } from '@angular/forms';

import { AddArticleModule } from './kbdisplayarticle/addarticle/addarticle.module';
import { approuting } from './app.routing';
import { SearcharticleModule } from './kbdisplayarticle/searcharticle/searcharticle.module';
import { EditarticleModule } from './kbdisplayarticle/editarticle/editarticle.module';
import { KbdisplayarticleModule } from './kbdisplayarticle/kbdisplayarticle.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginModule } from './login/login.module';





@NgModule({
  declarations: [
    AppComponent,

    MainLayoutComponent
    // KbdisplayarticleComponent,
    // AddarticleComponent,
    // EditarticleComponent,
    // SearcharticleComponent

    


  ],
  imports: [

    BrowserModule,FormsModule,
    
   
    KbdisplayarticleModule,
    AddArticleModule,
    SearcharticleModule,
    EditarticleModule,
    LoginModule,
    approuting,

    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
          MatDatepickerModule,
          MatDialogModule,
            MatDividerModule,
            MatGridListModule,
              MatIconModule,
              MatInputModule,
                MatListModule,
                MatMenuModule,
                MatNativeDateModule,
                  MatPaginatorModule,
                  MatProgressBarModule,
                    MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatTooltipModule,
      MatTreeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
