import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComComponent } from './second-com.component';

describe('SecondComComponent', () => {
  let component: SecondComComponent;
  let fixture: ComponentFixture<SecondComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
