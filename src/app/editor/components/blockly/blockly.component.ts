import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

declare var Blockly: any;

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.css']
})
export class BlocklyComponent implements OnInit, AfterViewInit {

  public blocklyArea: HTMLElement;
  public blocklyContainer: HTMLElement;
  public blocklyToolbox: HTMLElement;
  public workspace: Blockly.Workspace;
  public toolboxContent: SafeHtml;

  @Output() public onBlocklyCodeChange = new EventEmitter<string>();

  constructor(private domSanitizer: DomSanitizer) { }

  public ngOnInit() {
    this.toolboxContent = this.domSanitizer.bypassSecurityTrustHtml(`
      
  <xml id="toolbox" style="display: none">
    <category name="Entradas / Salidas">
      <block type="ciaa_sapi_gpio_write">
        <field name="pin_option">LEDR</field>
        <field name="value_option">ON</field>
      </block>
    </category>
    <category name="Control">
      <block type="ciaa_sapi_inaccurate_blocking_delay">
        <value name="delay_ms">
          <block type="math_number">
            <field name="NUM">1000</field>
          </block>
        </value>
      </block>
      <block type="ciaa_sapi_blocking_delay">
        <value name="delay_time">
          <block type="math_number">
            <field name="NUM">1000</field>
          </block>
        </value>
      </block>
    </category>
  </xml>
    `);
  }

  public ngAfterViewInit() {
    this.blocklyResize();
    this.workspace.addChangeListener((e) => this.blocklyCodeChange());

  }

  public blocklyResize() {
    this.blocklyArea = document.getElementById('blocklyArea');
    this.blocklyContainer = document.getElementById('blocklyDiv');
    this.blocklyToolbox = document.getElementById('toolbox');
    this.workspace = Blockly.inject(this.blocklyContainer,
      {
        toolbox: this.blocklyToolbox,
        scrollbars: false
      });
    let onresize = (e) => {
      // Compute the absolute coordinates and dimensions of blocklyArea.
      let element = this.blocklyArea;
      let x = 0;
      let y = 0;
      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = <HTMLElement> element.offsetParent;
      } while (element);
      // Position this.blocklyContainer over blocklyArea.
      // this.blocklyContainer.style.left = x + 'px';
      // this.blocklyContainer.style.top = y + 'px';
      this.blocklyContainer.style.width = this.blocklyArea.offsetWidth + 'px';
      this.blocklyContainer.style.height = this.blocklyArea.offsetHeight + 'px';
    };
    window.addEventListener('resize', onresize, false);
    onresize(null);
    Blockly.svgResize(<Blockly.WorkspaceSvg> this.workspace);
  }

  public blocklyCodeChange() {
    let code = Blockly.CiaaSapi.workspaceToCode(this.workspace);
    this.onBlocklyCodeChange.emit(code);
  }

}
