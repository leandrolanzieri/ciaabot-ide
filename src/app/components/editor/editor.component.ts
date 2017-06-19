import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public blocklyCode = '';
  public blocklyBlocks = null;
  constructor(
    private projectService: ProjectService
  ) { }

  public ngOnInit() {
    const code = this.projectService.getBlocklyCode();
    const blocks = this.projectService.getBlocklyBlocks();
    if (code) {
      this.blocklyCode = code;
    }
    if (blocks) {
      this.blocklyBlocks = blocks;
    }
  }

  public onBlocklyCodeChange(blocklyCode: string) {
    this.blocklyCode = blocklyCode;
    this.projectService.setBlocklyCode(blocklyCode);
  }

  public onBlocklyBlocksChange(blocklyBlocks: any) {
    this.projectService.setBlocklyBlocks(blocklyBlocks);
  }

}
