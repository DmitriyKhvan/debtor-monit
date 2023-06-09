import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAccompanimentComponent } from './sidebar-accompaniment.component';

describe('SidebarAccompanimentComponent', () => {
  let component: SidebarAccompanimentComponent;
  let fixture: ComponentFixture<SidebarAccompanimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAccompanimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
