import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsEditDialogComponent as DocsEditDialogComponent } from './docs-edit-dialog.component';

describe('DocsDialogComponent', () => {
  let component: DocsEditDialogComponent;
  let fixture: ComponentFixture<DocsEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocsEditDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
