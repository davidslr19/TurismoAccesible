import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseoNacionalPiso1Component } from './museo-nacional-piso1.component';

describe('MuseoNacionalPiso1Component', () => {
  let component: MuseoNacionalPiso1Component;
  let fixture: ComponentFixture<MuseoNacionalPiso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoNacionalPiso1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseoNacionalPiso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
