import { TestBed, inject } from '@angular/core/testing';

import { DocsUploadDialogService } from './docs-upload-dialog.service';

describe('ConfirmPromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocsUploadDialogService]
    });
  });

  it('should be created', inject([DocsUploadDialogService], (service: DocsUploadDialogService) => {
    expect(service).toBeTruthy();
  }));
});
