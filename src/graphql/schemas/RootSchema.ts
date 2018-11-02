import { GraphQLString } from 'graphql';
import { Query, SchemaRoot } from 'typegql';

@SchemaRoot()
export default class RootSchema {

  @Query({ type: GraphQLString })
  private ping(): string {
    return 'pong';
  }

}
