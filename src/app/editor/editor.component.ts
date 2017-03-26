import {
  Component,
  OnInit,
} from '@angular/core';



@Component({
  selector: 'editor',
  styleUrls: ['./editor.component.css'],
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  public blocklyCode: string = '';
  constructor() { }

  public ngOnInit() { }

  public onBlocklyCodeChange(blocklyCode: string) {
    this.blocklyCode = blocklyCode;
  }
}
