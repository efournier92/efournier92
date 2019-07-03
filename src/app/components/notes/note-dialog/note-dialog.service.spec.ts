import { TestBed, inject } from '@angular/core/testing';
import { NoteDialogService } from './note-dialog.service';

describe('ConfirmPromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteDialogService]
    });
  });

  it('should be created', inject([NoteDialogService], (service: NoteDialogService) => {
    expect(service).toBeTruthy();
  }));
});
