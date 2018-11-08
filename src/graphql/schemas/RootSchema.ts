import { GraphQLString } from 'graphql';
import { Query, SchemaRoot } from 'typegql';

@SchemaRoot()
export default class RootSchema {

  @Query({ type: GraphQLString })
  public ping(): string {
    return 'pong';
  }

}
