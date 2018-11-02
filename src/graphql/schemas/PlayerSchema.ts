
import { Query, SchemaRoot } from 'typegql';
import BuildingEntity from '../../database/models/Building.model';
import UserEntity, { User } from '../../database/models/User.model';

@SchemaRoot()
export default class PlayerSchema {

  @Query({ type: [User], description: 'Get all the players in a specific building' })
  public async getPlayerIn(buildingId: string): Promise<User[]> {
    const results = (await UserEntity.findAll({
      where: { buildingId },
      include: [BuildingEntity],
    }));
    return results.map((entity: UserEntity) => new User(entity));
  }
}
