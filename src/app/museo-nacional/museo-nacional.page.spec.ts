import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseoNacionalPage } from './museo-nacional.page';

describe('MuseoNacionalPage', () => {
  let component: MuseoNacionalPage;
  let fixture: ComponentFixture<MuseoNacionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoNacionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseoNacionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
