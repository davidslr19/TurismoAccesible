import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuseoPiso2Page } from './museo-piso2.page';

describe('MuseoPiso2Page', () => {
  let component: MuseoPiso2Page;
  let fixture: ComponentFixture<MuseoPiso2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoPiso2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuseoPiso2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
