import { TestBed, inject } from '@angular/core/testing';

import { DocsEditDialogService } from './docs-edit-dialog.service';

describe('ConfirmPromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocsEditDialogService]
    });
  });

  it('should be created', inject([DocsEditDialogService], (service: DocsEditDialogService) => {
    expect(service).toBeTruthy();
  }));
});
