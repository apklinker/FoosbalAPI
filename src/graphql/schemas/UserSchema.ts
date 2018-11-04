
import { Query, SchemaRoot } from 'typegql';
import BuildingEntity from '../../database/models/Building.entity';
import FavoriteUserEntity from '../../database/models/FavoriteUser.entity';
import UserEntity from '../../database/models/User.entity';
import UserModel from '../../database/models/User.model';

@SchemaRoot()
export default class UserSchema {

  @Query({ type: UserModel, description: 'Get a player by their Id' })
  public async getUserInfo(userId: string): Promise<UserModel> {
    const result = await UserEntity.findByPrimary(userId, {
      include: [
        {
          model: UserEntity,
          as: 'favoriteUsers',
          include: [BuildingEntity],
        },
        {
          model: UserEntity,
          as: 'favoritedByUsers',
          include: [BuildingEntity],
        },
      ],
    });
    if (result === null) {
      throw new Error(`User with id=${userId} was not found`);
    } else {
      return new UserModel(result);
    }
  }

  @Query({ type: [UserModel], description: 'Get all the players in a specific building' })
  public async getUserIn(buildingId: string): Promise<UserModel[]> {
    const results = await UserEntity.findAll({
      where: { buildingId },
      include: [BuildingEntity],
    });
    return results.map((entity: UserEntity) => new UserModel(entity));
  }

}
