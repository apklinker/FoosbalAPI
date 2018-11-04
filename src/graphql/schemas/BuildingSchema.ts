import { Query, SchemaRoot } from 'typegql';
import BuildingEntity from '../../database/models/Building.entity';
import BuildingModel from '../../database/models/Building.model';
import UserEntity from '../../database/models/User.entity';

@SchemaRoot()
export default class BuildingSchema {

  @Query({ type: [BuildingModel], description: 'Gets all non-deleted buildings' })
  public async getAllBuildings(): Promise<BuildingModel[]> {
    const results = await BuildingEntity.findAll({
      include: [UserEntity],
    });
    return results.map((entity: BuildingEntity) => new BuildingModel(entity));
  }

  @Query({ type: BuildingModel, description: 'Get a single building' })
  public async getBuildingById(id: string): Promise<BuildingModel> {
    const result = (await BuildingEntity.findById(id)) as BuildingEntity|null;
    if (result === null) {
      throw new Error(`Building iwth id=${id} was not found`);
    } else {
      return new BuildingModel(result);
    }
  }

}
