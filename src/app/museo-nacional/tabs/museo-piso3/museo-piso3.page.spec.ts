import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseoPiso3Page } from './museo-piso3.page';

describe('MuseoPiso3Page', () => {
  let component: MuseoPiso3Page;
  let fixture: ComponentFixture<MuseoPiso3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoPiso3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseoPiso3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
