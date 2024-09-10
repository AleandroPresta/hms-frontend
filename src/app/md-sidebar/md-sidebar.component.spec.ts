import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSidebarComponent } from './md-sidebar.component';

describe('MdSidebarComponent', () => {
  let component: MdSidebarComponent;
  let fixture: ComponentFixture<MdSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
