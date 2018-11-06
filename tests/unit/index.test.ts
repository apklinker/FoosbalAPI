import App from '../../src';
import Database from '../../src/database';
import server from '../../src/Server';

Database.connect = jest.fn();
server.start = jest.fn();

describe('index', () => {
  App();

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should launch the db', () => {
    expect(Database.connect).toBeCalled();
  });

  it('should start the server', () => {
    expect(server.start).toBeCalled();
  });

});
