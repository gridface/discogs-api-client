import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscogsComponent } from './discogs.component';

describe('DiscogsComponent', () => {
  let component: DiscogsComponent;
  let fixture: ComponentFixture<DiscogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
