import { CiaabotsModels } from './ciaabots-models.enum';

export class Project {
    public name: string;
    public ciaabotModel?: CiaabotsModels = CiaabotsModels.G1;
    public blocks?: string = '';
    public code?: string = '';
    public serialPort?: string = '';
}
