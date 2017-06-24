import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap';

declare var Blockly: any;

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.scss']
})
export class BlocklyComponent implements OnInit {
  public blocklyArea: HTMLElement;
  public blocklyContainer: HTMLElement;
  public blocklyToolbox: HTMLElement;
  public workspace: Blockly.Workspace;
  public toolboxContent: SafeHtml;
  public promptModalDesc: string;
  public promptCallback: any;
  public promptValue: string;
  @ViewChild('promptModal') public promptModal: ModalDirective;
  @Output() public onBlocklyCodeChange = new EventEmitter<string>();
  @Output() public onBlocklyBlocksChange = new EventEmitter<string>();
  @Input() public blocks;

  constructor(private domSanitizer: DomSanitizer) {
    Blockly.prompt = (a, b, c) => {
      this.promptModalDesc = a;
      this.promptCallback = c;
      this.promptModal.show();
      console.log('prompt', c);
    };
  }

  ngOnInit() {
    this.toolboxContent = this.domSanitizer.bypassSecurityTrustHtml(`
  <xml id="toolbox" style="display: none">
    <category name="Lógica" colour="210">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_true"></block>
      <block type="logic_false"></block>
      <block type="logic_negate"></block>
      <block type="logic_null"></block>
    </category>
    <category name="Entradas / Salidas" colour="120">
      <block type="ciaa_sapi_gpio_write">
        <field name="pin_option">LEDR</field>
        <field name="value_option">ON</field>
      </block>
      <block type="ciaa_sapi_gpio_digital_read" >
        <field name="pin_option">GPIO0</field>
      </block>
      <block type="ciaa_sapi_gpio_analog_read">
        <field name="pin_option">CH1</field>
      </block>
      <block type="ciaa_sapi_dac_write">
        <field name="pin_option">DAC</field>
        <field name="value">0</field>
      </block>
      <block type="ciaa_sapi_pwm_write">
        <field name="pin_option">PWM0</field>
        <field name="value_option">50</field>
      </block>
      <block type="ciaa_sapi_pwm_read">
        <field name="pin_option">PWM0</field>
      </block>
    </category>
    <category name="Servo" colour="230">
      <block type="ciaa_sapi_servo_write">
        <field name="pin_option">SERVO0</field>
        <field name="value_option">90</field>
      </block>
      <block type="ciaa_sapi_servo_read">
        <field name="pin_option">SERVO0</field>
      </block>
    </category>
    <category name="Control" colour="20">
      <block type="controls_main_program">
      </block>
      <block type="controls_repeat_forever">
      </block>
      <block type="controls_whileUntil">
      </block>
      <block type="ciaa_sapi_blocking_delay">
        <value name="delay_time">
          <block type="math_number">
            <field name="NUM">1000</field>
          </block>
        </value>
      </block>
      <block type="ciaa_sapi_sleep_until_interrupt">
      </block>
      <block type="controls_for">
        <value name="FROM">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="TO">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
        <value name="BY">
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
      </block>
    </category>
    <category name="Variables" custom="VARIABLE" colour="330"></category>
    <category name="Funciones" custom="PROCEDURE" colour="290"></category>
    <category name="Matemática">
      <block type="math_number">
      </block>
      <block type="math_arithmetic">
      </block>
    </category>
    <category name="Texto">
      <block type="text"></block>
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
        element = element.offsetParent as HTMLElement;
      } while (element);
      // Position this.blocklyContainer over blocklyArea.
      // this.blocklyContainer.style.left = x + 'px';
      // this.blocklyContainer.style.top = y + 'px';
      this.blocklyContainer.style.width = this.blocklyArea.offsetWidth + 'px';
      this.blocklyContainer.style.height = this.blocklyArea.offsetHeight + 'px';
    };
    window.addEventListener('resize', onresize, false);
    onresize(null);
    Blockly.svgResize(this.workspace as Blockly.WorkspaceSvg);

    if (this.blocks) {
      const xml = Blockly.Xml.textToDom(this.blocks);
      Blockly.Xml.domToWorkspace(xml, this.workspace);
    }
  }

  public blocklyCodeChange() {
    const code = Blockly.CiaaSapi.workspaceToCode(this.workspace);
    const xml = Blockly.Xml.workspaceToDom(this.workspace);
    const xmlText = Blockly.Xml.domToText(xml);
    this.onBlocklyCodeChange.emit(code);
    this.onBlocklyBlocksChange.emit(xmlText);
  }

  public promptReady() {
    this.promptCallback(this.promptValue);
  }
}
