import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public blocklyCode = '';
  constructor() { }

  ngOnInit() {
  }

  public onBlocklyCodeChange(blocklyCode: string) {
    this.blocklyCode = blocklyCode;
  }

}
