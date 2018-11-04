
import { Query, SchemaRoot } from 'typegql';
import BuildingEntity from '../../database/models/Building.entity';
import UserEntity from '../../database/models/User.entity';
import UserModel from '../../database/models/User.model';

@SchemaRoot()
export default class PlayerSchema {

  @Query({ type: [UserModel], description: 'Get all the players in a specific building' })
  public async getPlayerIn(buildingId: string): Promise<UserModel[]> {
    const results = (await UserEntity.findAll({
      where: { buildingId },
      include: [BuildingEntity],
    }));
    return results.map((entity: UserEntity) => new UserModel(entity));
  }
}
