import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
  public project: Project = new Project();
  constructor() { }

  public setBlocklyBlocks(blocks: any) {
    if (this.project) {
      this.project.blocks = blocks;
    }
  }

  public getBlocklyBlocks(): string {
    if (this.project) {
      if (this.project.blocks) {
        return this.project.blocks;
      }
    }
    return null;
  }

  public setBlocklyCode(code: string) {
    if (this.project) {
      this.project.code = code;
    }
  }

  public getBlocklyCode(): string {
    if (this.project) {
      if (this.project.code) {
        return this.project.code;
      }
    }
    return null;
  }

}
