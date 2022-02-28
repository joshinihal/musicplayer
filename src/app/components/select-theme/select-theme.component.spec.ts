import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectThemeComponent } from './select-theme.component';

describe('SelectThemeComponent', () => {
  let component: SelectThemeComponent;
  let fixture: ComponentFixture<SelectThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
