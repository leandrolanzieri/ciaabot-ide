import { CiaabotsModels } from './ciaabots-models.enum';
import { RecentProject } from './recent-project';

export class UserPreferences {
    public defaultSerialPort: string = null;
    public defaultCiaabotModel: CiaabotsModels = null;
    public recentProjects: RecentProject[];
}
