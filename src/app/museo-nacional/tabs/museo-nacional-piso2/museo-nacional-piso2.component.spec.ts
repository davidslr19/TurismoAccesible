import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseoNacionalPiso2Component } from './museo-nacional-piso2.component';

describe('MuseoNacionalPiso2Component', () => {
  let component: MuseoNacionalPiso2Component;
  let fixture: ComponentFixture<MuseoNacionalPiso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoNacionalPiso2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseoNacionalPiso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
