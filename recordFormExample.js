import { LightningElement, track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class RecordFormExample extends LightningElement {
  @track recordId;
  fieldsArray = [NAME_FIELD, PHONE_FIELD];

  handleSuccess(event) {
    this.recordId = event.detail.id;
  }
}
