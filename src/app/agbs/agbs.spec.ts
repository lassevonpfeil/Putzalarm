import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agbs } from './agbs';

describe('Agbs', () => {
  let component: Agbs;
  let fixture: ComponentFixture<Agbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agbs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agbs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
