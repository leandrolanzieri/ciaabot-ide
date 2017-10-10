import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { NotificationsService } from 'angular2-notifications';
import { IdeConfiguration } from '../models/ide-configuration';

const configurationStorageString = 'IDE_CONFIG';

@Injectable()
export class IdeConfigurationService {
  private ideConfiguration: IdeConfiguration;

  constructor(
    private storage: LocalStorageService,
    private notificationsService: NotificationsService,
  ) {
    this.ideConfiguration = this.storage.retrieve(configurationStorageString) || new IdeConfiguration();
  }

  public getIdeConfiguration(): IdeConfiguration {
    return this.ideConfiguration;
  }

  public setIdeConfiguration(config: IdeConfiguration) {
    if (config instanceof IdeConfiguration) {
      this.ideConfiguration = config;
    }
    this.persistConfiguration();
  }

  public getPaths(): string[] {
    return this.ideConfiguration.paths;
  }

  public addToPath(path: string) {
    this.ideConfiguration.paths.push(path);
    this.persistConfiguration();
  }

  public removeFromPath(path: string) {
    let index = this.ideConfiguration.paths.indexOf(path);
    if (index + 1) {
      this.ideConfiguration.paths.splice(index, 1);
    }
    this.persistConfiguration();
  }

  private persistConfiguration() {
    this.storage.store(configurationStorageString, this.ideConfiguration);
  }
}
