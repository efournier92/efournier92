import { TestBed, inject } from '@angular/core/testing';
import { TagsDialogService } from './tags-dialog.service';

describe('ConfirmPromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagsDialogService]
    });
  });

  it('should be created', inject([TagsDialogService], (service: TagsDialogService) => {
    expect(service).toBeTruthy();
  }));
});
