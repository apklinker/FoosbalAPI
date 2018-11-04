# Source Allies Foosball

This project is the backend meant to provide stats for the ball Players here at Source Allies!

The tech used in this project is Node, Express, GraphQL, Postgres, Jest, Sequelize, TypeGQL, Firebase Auth.

## Setup
You will need NodeJS and PostgreSQL.

```bash
yarn install         # Install needed packages
yarn init:env        # Create a template for the .env file
yarn init:db-config  # Create a template for the database config file
yarn seq db:create   # Create the necessary database for development (ensure postgres is running first)
yarn start:dev       # Start the application in dev mode with live-reload
```

## (Probably Out-of-Date) Database Schema

All types will have the following properties:

- **id**: `Long`
- **createdAt**: `Long` *(epoch ms)*
- **updatedAt**: `Long` *(epoch ms)*
- **deletedAt**: `Long?` *(epoch ms)*

### `User`
- **firstName**: `String` *(255 chars)*
- **lastName**: `String` *(255 chars)*
- **name**: `Virtual String` *(255 chars)*
- **buildingId**: `Long` → *Building.id*
- **elos**: `Elo[]` ← *Elo.userId*
- **favoriteUsers**: `User[]` ← *FavoriteUser.favoriteUserId*

### `FavoriteUser`
- **userId**: `Long` → *User.id,*
- **favoritedUserId**: `Long` → *User.id*

### `Elo`
- **finalRanking**: `Int?`
- **value**: `Int` *(1000 deafult)*
- **matchCount**: `Int`
- **userId**: `Long` → *User.id*
- **seasonId**: `Long` → *Season.id*

### `Season`
- **startDate**: `Long` *(epoch ms)*
- **endDate**: `Long` *(epoch ms)*
- **number**: `Int`
- **elos**: `Elo[]` ← *Elo.seasonId*
- **matches**: `Match[]` ← *Match.seasonId*

### `Building`
- **name**: `String` *(255 chars)*
- **address**: `String` *(255 chars)*
- **queueId**: `Long` → *BuildingQueue.id*
- **users**: `User[]` ← *User.buildingId*
- **tables**: `Table[]` ← *Table.buildingId*

### `Table`
- **number**: `Int?`
- **description**: `String?` *(255 chars)*
- **inUse**: `boolean`
- **isActive**: `boolean?` (from sensor)
- **buildingId**: `Long` → *Building.id*
- **homeColorId**: `Long` → *Color.id*
- **awayColorId**: `Long` → *Color.id*

### `Match`
- **startedAt**: `Long?` *(epoch ms)*
- **finishedAt**: `Long?` *(epoch ms)*
- **homeScore**: `Int?`
- **awayScore**: `Int?`
- **statusId**: `Long` → *MatchStatus.id*
- **typeId**: `Long` → *MatchType.id*
- **seasonId**: `Long` → *Season.id*
- **tableId**: `Long` → *Table.id*
- **players**: `MatchPlayer[]` ← *MatchPlater.matchId*

### `MatchPlayer`
- **isHome**: `Boolean`
- **isAway**: `Virtual Boolean`
- **userId**: `Long` → *User.id*
- **matchId**: `Long` → *Match.id*

### `MatchStatus`
- **display**: `'Not Started'|'In Progress'|'Finished'` *(255 chars)*
- **matches**: `Match[]` ← *Match.statusId*

### `MatchType`
- **value**: `'One v One'|'Doubles'` *(255 chars)*
- **matches**: `Match[]` ← *Match.typeId*
- **queueGroups**: `QueueGroup[]` ← *queueGroup.matchTypePrefId*

### `Color`
- **hex**: `Int` *(hex to int)*
- **name**: `String` *(255 chars)*
- **homeTables**: `Table[]` ← *Table.homeColorId*
- **awayTables**: `Table[]` ← *Table.awayColorId*

### `BuildingQueue`
- **buildingId**: `Long` → *Building.id*
- **groups**: `QueueGroup[]` ← *QueueGroup.queueId*

### `QueueGroup`
- **joinedAt**: `Long` *(epoch ms)*
- **matchTypePrefId**: `Long` → *MatchType.id*
- **queueId**: `Long` → *BuildingQueue.id*
- **players**: `QueuePlayer[]` ← *QueuePlayer.groupId*

### `QueuePlayer`
- **userId**: `Long` → *User.id*
- **groupId**: `Long` → *QueueGroup.id*
