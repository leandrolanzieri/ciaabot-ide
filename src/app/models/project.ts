import { CiaabotsModels } from './ciaabots-models.enum';

export class Project {
    public name;
    public ciaabotModel: CiaabotsModels = CiaabotsModels.G1;
    public file: string = '';
    public blocks: string = '';
    public code = '';
    public serialPort = '';
}
