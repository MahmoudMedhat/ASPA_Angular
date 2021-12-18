import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditePersonComponent } from './edite-person.component';

describe('EditePersonComponent', () => {
  let component: EditePersonComponent;
  let fixture: ComponentFixture<EditePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
