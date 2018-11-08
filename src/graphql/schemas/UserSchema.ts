// istanbul ignore file
import { Query, SchemaRoot } from 'typegql';
import UserModel from '../../database/models/User.model';
import getUser from '../queries/getUser';
import getUsersInBuilding from '../queries/getUsersInBuilding';

@SchemaRoot()
export default class UserSchema {

  @Query({ type: [UserModel], description: 'Get all the players in a specific building' })
  public async getUsersInBuilding(buildingId: string): Promise<UserModel[]> { return getUsersInBuilding(buildingId); }

  @Query({ type: UserModel, description: 'Get a user by their id' })
  public async getUser(userId: string) { return getUser(userId); }

}
