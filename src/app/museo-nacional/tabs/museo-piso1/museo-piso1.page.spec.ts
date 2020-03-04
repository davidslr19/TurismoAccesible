import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseoPiso1Page } from './museo-piso1.page';

describe('MuseoPiso1Page', () => {
  let component: MuseoPiso1Page;
  let fixture: ComponentFixture<MuseoPiso1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoPiso1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseoPiso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
