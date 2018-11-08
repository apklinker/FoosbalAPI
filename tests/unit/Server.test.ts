import middleware from '../../src/middleware';
import server from '../../src/Server';
import Env from '../../src/utils/Env';
import Log from '../../src/utils/Log';

const logMock = jest.fn();
Log.d = logMock;
const expressUseSpy = jest.spyOn(server.expressApp, 'use');
const expressListenSpy = jest.spyOn(server.expressApp, 'listen');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Server Methods', () => {

  it('start', () => {
    const port = 8000;
    const setupMiddlewareSpy = jest.spyOn(server, 'setupMiddleware');
    const setupRoutesSpy = jest.spyOn(server, 'setupRoutes');
    setupMiddlewareSpy.mockImplementationOnce(() => { /* do nothing */ });
    setupRoutesSpy.mockImplementationOnce(() => { /* do nothing */ });
    expressListenSpy.mockImplementation(() => { /* do nothing */ });
    server.start(port);

    expect(setupMiddlewareSpy).toBeCalled();
    expect(setupRoutesSpy).toBeCalled();
    expect(expressListenSpy).toBeCalled();
  });

  it('setupMiddleware', () => {
    expressUseSpy.mockReturnValueOnce(server.expressApp);
    server.setupMiddleware();
    expect(expressUseSpy).toBeCalledWith(middleware);
  });

  it('setupRoutes', () => {
    expressUseSpy.mockReturnValueOnce(server.expressApp);
    server.setupRoutes();
    expect(expressUseSpy).toBeCalledWith('/api', expect.any(Function));
  });

  describe('onListen', () => {

    it('should call log in dev', () => {
      Env.nodeEnv = 'dev';
      server.onListen(8000)();
      expect(logMock).toBeCalledTimes(2);
      logMock.mockClear();
    });

    it('should not call log is non-dev mode', () => {
      Env.nodeEnv = 'test';
      server.onListen(8000)();
      expect(logMock).not.toBeCalled();
      logMock.mockClear();
    });

  });

});
