import { Query, SchemaRoot } from 'typegql';
import BuildingEntity, { Building } from '../../database/models/Building.model';
import UserEntity from '../../database/models/User.model';

@SchemaRoot()
export default class BuildingSchema {

  @Query({ type: [Building], description: 'Gets all non-deleted buildings' })
  public async getAllBuildings(): Promise<Building[]> {
    const results = await BuildingEntity.findAll({
      include: [UserEntity],
    });
    return results.map((entity: BuildingEntity) => new Building(entity));
  }

  @Query({ type: Building, description: 'Get a single building' })
  public async getBuildingById(id: string): Promise<Building> {
    const result = (await BuildingEntity.findById(id)) as BuildingEntity|null;
    if (result === null) {
      throw new Error(`Building iwth id=${id} was not found`);
    } else {
      return new Building(result);
    }
  }

}
