import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfoListComponent } from './add-info-list.component';

describe('AddInfoListComponent', () => {
  let component: AddInfoListComponent;
  let fixture: ComponentFixture<AddInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
