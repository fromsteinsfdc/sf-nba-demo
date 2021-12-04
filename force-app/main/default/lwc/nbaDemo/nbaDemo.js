import { LightningElement, api } from 'lwc';

export default class NbaDemo extends LightningElement {
    @api title = 'Next Best Action';
    @api body;// = 'Enter the text of your Next Best Action here.';
    @api button1Label;// = 'Cancel';
    @api button2Label;// = 'Launch';
    @api imgSrc;
}