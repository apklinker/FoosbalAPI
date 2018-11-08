import Database, { sequelize } from '../../../src/database';
import Log from '../../../src/utils/Log';

Log.d = jest.fn();
Log.e = jest.fn();

describe('Database.connect()', () => {

  it('should call sequelize.authenitcate()', async (done) => {
    sequelize.authenticate = jest.fn(() => Promise.resolve());
    Database.connect();
    expect(sequelize.authenticate).toBeCalled();
    process.nextTick(() => {
      expect(Log.d).toBeCalledWith('Connected to postgres');
      done();
    });
  });

  it('should call sequelize.authenitcate()', async (done) => {
    const err = 'err';
    sequelize.authenticate = jest.fn(() => Promise.reject(err));
    Database.connect();
    expect(sequelize.authenticate).toBeCalled();
    process.nextTick(() => {
      expect(Log.e).toBeCalledWith('Failed to connect to postgres', err);
      done();
    });
  });

});
