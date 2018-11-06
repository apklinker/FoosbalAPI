import Log from '../../../src/utils/Log';
const logMock = jest.fn();
const errorMock = jest.fn();
Log.d = logMock;
Log.e = errorMock;

import Database, { sequelize } from '../../../src/database';

const authMock = jest.fn();
sequelize.authenticate = jest.fn();

describe('database', () => {

  describe('connect', () => {

    beforeEach(() => {
      logMock.mockClear();
    });

    it('should log on success', () => {
      authMock.mockReturnValueOnce({});
      Database.connect();
      expect(logMock).toBeCalledWith('Connected to postgres.');
    });

    it('should log on failure', () => {
      const err = {};
      authMock.mockRejectedValueOnce(err);
      Database.connect();
      expect(errorMock).toBeCalledWith('Unable to connect to the database: ', err);
    });

  });

});
