import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbdisplayarticleComponent } from './kbdisplayarticle.component';

describe('KbdisplayarticleComponent', () => {
  let component: KbdisplayarticleComponent;
  let fixture: ComponentFixture<KbdisplayarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbdisplayarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbdisplayarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
