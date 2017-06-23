import { DialogOption } from './dialog-option';

export class Dialog {
    public title?: string = '';
    public titleClass?: string = '';
    public titleIcon?: string = '';
    public description?: string = '';
    public options: DialogOption[] = [];
    public canDismiss?: boolean = true;
}
