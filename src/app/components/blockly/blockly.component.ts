import { Component, OnInit, ViewChild, Output, EventEmitter, Input, AfterViewInit, HostListener, NgZone } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap';
import { BlocklyService } from './blockly.service';
import { Observable } from 'rxjs/Observable';
import { AppSidebarService } from '../app-sidebar/app-sidebar.service';

declare var Blockly: any;

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.scss']
})
export class BlocklyComponent implements OnInit, AfterViewInit {
  public blocklyArea: HTMLElement;
  public blocklyContainer: HTMLElement;
  public blocklyToolbox: HTMLElement;
  public workspace: Blockly.Workspace;
  public toolboxContent: SafeHtml;
  public promptModalDesc: string;
  public promptCallback: any;
  public promptValue: string;
  public blocklyResizeSubscription: Observable<boolean>;
  @ViewChild('promptModal') public promptModal: ModalDirective;
  @Output() public onBlocklyCodeChange = new EventEmitter<string>();
  @Output() public onBlocklyBlocksChange = new EventEmitter<string>();
  @Input() public blocks;

  constructor(
    private domSanitizer: DomSanitizer,
    private blocklyService: BlocklyService,
    private appSidebarService: AppSidebarService,
    private ngZone: NgZone
  ) {
    Blockly.prompt = (a, b, c) => {
      this.promptModalDesc = a;
      this.promptCallback = c;
      this.promptModal.show();
    };
  }

  public ngOnInit() {
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
      <block type="switch_case"></block>
    </category>
    <category name="Entradas / Salidas" colour="120">
      <block type="ciaa_sapi_gpio_write">
        <field name="pin_option">LEDR</field>
        <value name="value">
          <block type="logic_on"></block>
        </value>
      </block>
      <block type="ciaa_sapi_gpio_digital_read" >
        <field name="pin_option">GPIO0</field>
      </block>
      <block type="ciaa_sapi_gpio_toggle" >
        <field name="pin_option">GPIO0</field>
      </block>
      <block type="ciaa_sapi_gpio_analog_read">
        <field name="pin_option">CH1</field>
      </block>
      <block type="ciaa_sapi_dac_write">
        <field name="pin_option">DAC</field>
        <value name="value">
          <block type="math_number">
            <field name="NUM">150</field>
          </block>
        </value>
      </block>
      <block type="ciaa_sapi_pwm_write">
        <field name="pin_option">PWM0</field>
        <value name="value">
          <block type="math_number">
            <field name="NUM">50</field>
          </block>
        </value>
      </block>
      <block type="ciaa_sapi_pwm_read">
        <field name="pin_option">PWM0</field>
      </block>
      <block type="logic_on"></block>
      <block type="logic_off"></block>
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
    <category name="Tiempo" colour="30">
      <block type="ciaa_sapi_delay_seconds">
        <value name="TIME">
          <block type="math_number">
            <field name="NUM">5</field>
          </block>
        </value>
      </block>
      <block type="ciaa_sapi_get_tick_count">
      </block>
      <block type="ciaa_sapi_set_tick_count">
        <value name="ticks">
          <block type="math_number">
            <field name="NUM">5</field>
          </block>
        </value>
      </block>
    </category>
    <category name="Control" colour="20">
      <block type="controls_main_program">
      </block>
      <block type="controls_repeat_forever">
      </block>
      <block type="controls_whileUntil">
      </block>
      <block type="controls_for_simplified">
        <value name="CANT">
          <block type="math_number">
            <field name="NUM">5</field>
          </block>
        </value>
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
      <block type="math_arithmetic"></block>
      <block type="math_map_range">
            <value name="MIN_INITIAL">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
            <value name="MAX_INITIAL">
              <block type="math_number">
                <field name="NUM">1023</field>
              </block>
            </value>
            <value name="MIN_LAST">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
            <value name="MAX_LAST">
              <block type="math_number">
                <field name="NUM">255</field>
              </block>
            </value>
      </block>
    </category>
    <category name="Texto">
      <block type="ciaa_sapi_uart_send_string"></block>
      <block type="ciaa_sapi_uart_receive_byte"></block>
      <block type="ciaa_sapi_uart_send_byte"></block>
      <block type="text"></block>
    </category>
  </xml>
    `);
  }

  public ngAfterViewInit() {
    this.blocklyResize();
    this.workspace.addChangeListener((e) => this.blocklyCodeChange());

    // Super hacky way of triggering blockly resize without calling the method directly
    this.appSidebarService.getShowCCode().subscribe((show: boolean) => {
      const event = new Event('resize');
      setTimeout(() => {
        window.dispatchEvent(event);
      }, 1);
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    console.log("Resize");
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
    if (this.blocklyContainer) {
      this.blocklyContainer.style.width = this.blocklyArea.offsetWidth + 'px';
      this.blocklyContainer.style.height = this.blocklyArea.offsetHeight + 'px';
    }
  }

  public blocklyResize() {
    this.blocklyArea = document.getElementById('blocklyArea');
    this.blocklyContainer = document.getElementById('blocklyDiv');
    this.blocklyToolbox = document.getElementById('toolbox');
    this.workspace = Blockly.inject(this.blocklyContainer,
      {
        toolbox: this.blocklyToolbox,
        zoom:
        {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
        trashcan: true
      });
    this.onResize(null);
    Blockly.svgResize(this.workspace as Blockly.WorkspaceSvg);

    if (this.blocks) {
      const xml = Blockly.Xml.textToDom(this.blocks);
      Blockly.Xml.domToWorkspace(xml, this.workspace);
    }
  }

  public blocklyCodeChange() {
    const code = Blockly.CiaaSapi.workspaceToCode(this.workspace);
    console.log(Blockly.Arduino);
    const xml = Blockly.Xml.workspaceToDom(this.workspace);
    const xmlText = Blockly.Xml.domToText(xml);
    this.onBlocklyCodeChange.emit(code);
    this.onBlocklyBlocksChange.emit(xmlText);
  }

  public promptReady() {
    this.promptCallback(this.promptValue);
  }
}
