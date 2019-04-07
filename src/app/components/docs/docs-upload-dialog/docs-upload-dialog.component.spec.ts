import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsUploadDialogComponent } from './docs-upload-dialog.component';

describe('DocsDialogComponent', () => {
  let component: DocsUploadDialogComponent;
  let fixture: ComponentFixture<DocsUploadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocsUploadDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
