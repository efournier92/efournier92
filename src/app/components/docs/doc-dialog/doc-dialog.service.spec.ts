import { TestBed, inject } from '@angular/core/testing';

import { DocDialogService } from './doc-dialog.service';

describe('ConfirmPromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocDialogService]
    });
  });

  it('should be created', inject([DocDialogService], (service: DocDialogService) => {
    expect(service).toBeTruthy();
  }));
});
