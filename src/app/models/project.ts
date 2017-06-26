import { CiaabotsModels } from './ciaabots-models.enum';

export class Project {
    public name: string;
    public ciaabotModel?: CiaabotsModels = CiaabotsModels.G1;
    public blocks?: string =  '<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"controls_main_program\" id=\"vYl-IGc[-9+)Lg=uax+W\" x=\"-378\" y=\"-60\"></block></xml>';
    public code?: string = '';
    public serialPort?: string = '';

    public isProject(project: any): project is Project {
        return project.name != null;
    }
}
