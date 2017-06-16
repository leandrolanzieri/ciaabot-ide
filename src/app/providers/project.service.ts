import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
  public project: Project = null;
  constructor() { }

}
