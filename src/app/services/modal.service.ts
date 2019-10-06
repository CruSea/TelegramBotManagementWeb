import {Injectable} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ModalComponent} from '../pages/modal/modal.component';
import {ErrorMessage} from '../models/error-message';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public modalService: BsModalService) {
  }

  openModal(title: string, message: string, success: boolean, error: boolean, connection: boolean) {
    const initialState = {
      title: title,
      message: message,
      success: success,
      error: error,
      connection: connection
    };
    this.modalService.show(ModalComponent, {initialState});
  }
  openErrorModal(errorMessage: ErrorMessage[]) {
    errorMessage.forEach(error => {
      this.openModal(
        error.title,
        error.message,
        false,
        true,
        false
      );
    });
  }

}
