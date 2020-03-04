import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParqueSimonBolivarPage } from './parque-simon-bolivar.page';

describe('ParqueSimonBolivarPage', () => {
  let component: ParqueSimonBolivarPage;
  let fixture: ComponentFixture<ParqueSimonBolivarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueSimonBolivarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParqueSimonBolivarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
