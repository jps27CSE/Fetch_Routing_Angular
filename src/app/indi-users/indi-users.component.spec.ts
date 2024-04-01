import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiUsersComponent } from './indi-users.component';

describe('IndiUsersComponent', () => {
  let component: IndiUsersComponent;
  let fixture: ComponentFixture<IndiUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndiUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
