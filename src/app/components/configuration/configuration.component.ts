import { Component, OnInit } from '@angular/core';
import { IdeConfigurationService } from '../../providers/ide-configuration.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IdeConfiguration } from '../../models/ide-configuration';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  public configuration: IdeConfiguration;
  public changes = false;

  constructor(
    private ideConfiguration: IdeConfigurationService,
    private notificationsService: NotificationsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.configuration = this.ideConfiguration.getIdeConfiguration();
  }

  public onFileChange(event: any) {
    if (event.target.files[0]) {
      this.configuration.paths.push(event.target.files[0].path);
    }
    event.target.value = null;
    this.changes = true;
  }

  public removePath(index) {
    this.configuration.paths.splice(index, 1);
    this.changes = true;
  }

  public saveConfiguration() {
    this.ideConfiguration.setIdeConfiguration(this.configuration);
    this.notificationsService.info('Configuración guardada');
    this.changes = false;
  }
}
