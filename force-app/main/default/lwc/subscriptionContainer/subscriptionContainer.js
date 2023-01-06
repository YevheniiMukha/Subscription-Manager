import {LightningElement, track} from 'lwc';

export default class SubscriptionContainer extends LightningElement {
    @track formVisibility = false;
    handleAdd(){
        this.formVisibility = true;
    }
    handleClose(){
        this.formVisibility = false;
    }
}