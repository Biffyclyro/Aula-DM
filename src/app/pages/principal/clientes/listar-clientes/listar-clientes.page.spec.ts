import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarClientesPage } from './listar-clientes.page';

describe('ListarClientesPage', () => {
  let component: ListarClientesPage;
  let fixture: ComponentFixture<ListarClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarClientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
