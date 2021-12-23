import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactContainerComponent } from './react-container.component';

describe('ReactContainerComponent', () => {
  let component: ReactContainerComponent<Record<string, unknown>>;
  let fixture: ComponentFixture<
    ReactContainerComponent<Record<string, unknown>>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
