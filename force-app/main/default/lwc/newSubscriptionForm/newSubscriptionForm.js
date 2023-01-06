import {LightningElement, api} from 'lwc';

import SUBSCRIPTION_OBJECT from '@salesforce/schema/Subscription__c';
import SUBSCRIPTION_NAME from '@salesforce/schema/Subscription__c.Name';
import SUBSCRIPTION_PAYMENT_DAY from '@salesforce/schema/Subscription__c.Payment_Day__c';
import SUBSCRIPTION_PRICE from '@salesforce/schema/Subscription__c.Price__c';

export default class NewSubscriptionForm extends LightningElement {
    @api visibility;
    subscriptionObject = SUBSCRIPTION_OBJECT;
    nameField = SUBSCRIPTION_NAME;
    paymentDayField = SUBSCRIPTION_PAYMENT_DAY;
    priceField = SUBSCRIPTION_PRICE;
    colorField = '#D04B4B';
    fieldsSubscriptionObject;

    handleSubscriptionCreated(){
        this.closeForm();
    }

    handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Color__c = this.colorField;
        this.fieldsSubscriptionObject = fields;
        this.handleSave();
    }

    handleSave(){
        this.template.querySelector('lightning-record-edit-form').submit(this.fieldsSubscriptionObject);
    }

    handleColorChange(event){
        this.colorField = event.target.value;
    }

    handleClose(){
        this.closeForm();
    }

    /* ----------- Helper methods -------------- */

    closeForm(){
       this.dispatchEvent(new CustomEvent('close'));
    }
}