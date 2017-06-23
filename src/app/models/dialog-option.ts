export class DialogOption {
    public text?: string = '';
    public class?: string = '';
    public icon?: string = '';
    public callback?: (...args: any[]) => any;
}
