import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocDialogComponent } from './doc-dialog.component';

describe('DocsDialogComponent', () => {
  let component: DocDialogComponent;
  let fixture: ComponentFixture<DocDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
