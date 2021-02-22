import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoAddComponent } from './estabelecimento-add.component';

describe('EstabelecimentoAddComponent', () => {
  let component: EstabelecimentoAddComponent;
  let fixture: ComponentFixture<EstabelecimentoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
