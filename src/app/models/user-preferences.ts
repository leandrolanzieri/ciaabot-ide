import { CiaabotsModels } from './ciaabots-models.enum';
export class UserPreferences {
    public defaultSerialPort: string = null;
    public defaultCiaabotModel: CiaabotsModels = null;
    public recentProjects: Array<{ name: string, projectFile: string, lastOpened: Date }> = [];
}
