import { CiaabotsModels } from './ciaabots-models.enum';

export class Project {
    public name = 'Proyecto Ciaabot';
    public ciaabotModel: CiaabotsModels = CiaabotsModels.G1;
    public blocks = '';
    public serialPort = '';
}
