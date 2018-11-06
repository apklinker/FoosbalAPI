import dotenv from 'dotenv';
const configSpy = jest.spyOn(dotenv, 'config');

import Env from '../../../src/utils/Env';

describe('Env', () => {

  it('should call dotenv setup', () => {
    expect(configSpy).toBeCalled();
    configSpy.mockClear();
  });

  describe('isTest', () => {

    it('should be true when NODE_ENV is "test"', () => {
      Env.nodeEnv = 'test';
      expect(Env.isTest()).toBe(true);
    });

    it('should be true when NODE_ENV is "other"', () => {
      Env.nodeEnv = 'dev';
      expect(Env.isTest()).toBe(false);
    });

  });

  describe('isDev', () => {

    it('should be true when NODE_ENV is "dev"', () => {
      Env.nodeEnv = 'dev';
      expect(Env.isDev()).toBe(true);
    });

    it('should be true when NODE_ENV is "other"', () => {
      Env.nodeEnv = 'production';
      expect(Env.isDev()).toBe(false);
    });

  });

  describe('isProduction', () => {

    it('should be true when NODE_ENV is "production"', () => {
      Env.nodeEnv = 'production';
      expect(Env.isProduction()).toBe(true);
    });

    it('should be true when NODE_ENV is "other"', () => {
      Env.nodeEnv = 'test';
      expect(Env.isProduction()).toBe(false);
    });

  });

});
