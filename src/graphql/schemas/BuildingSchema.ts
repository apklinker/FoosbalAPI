// istanbul ignore file
import { Query, SchemaRoot } from 'typegql';
import BuildingModel from '../../database/models/Building.model';
import getAllBuildings from '../queries/getAllBuildings';
import getBuilding from '../queries/getBuilding';

@SchemaRoot()
export default class BuildingSchema {

  @Query({ type: [BuildingModel], description: 'Gets all buildings' })
  public async getAllBuildings(): Promise<BuildingModel[]> { return getAllBuildings(); }

  @Query({ type: BuildingModel, description: 'Get a single building' })
  public async getBuilding(buildingId: string): Promise<BuildingModel> { return getBuilding(buildingId); }

}
