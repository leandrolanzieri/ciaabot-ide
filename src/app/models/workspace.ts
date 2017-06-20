import { Project } from './project';
export class Workspace {
    public project: Project = null;
    public path: string = '';
    public projectFile: string = '';
    public changes: boolean = false;
}
