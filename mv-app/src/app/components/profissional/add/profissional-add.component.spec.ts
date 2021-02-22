import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalAddComponent } from './profissional-add.component';

describe('ProfissionalAddComponent', () => {
  let component: ProfissionalAddComponent;
  let fixture: ComponentFixture<ProfissionalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
