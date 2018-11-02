import dotenv from 'dotenv';
dotenv.config();

export default class Env {

  public static nodeEnv: 'dev' | 'test' | 'production' = process.env.NODE_ENV as 'dev' | 'test' | 'production';
  public static server = {
    port: parseInt(process.env.SERVER_PORT as string, 10),
  };
  public static package = {
    version: process.env.npm_package_version as string,
  };
  public static database = {
    host: process.env.DATABASE_HOST as string,
    name: process.env.DATABASE_NAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    port: parseInt(process.env.DATABASE_PORT as string, 10),
    username: process.env.DATABASE_USERNAME as string,
  };
  public static devToken: string = process.env.DEV_TOKEN as string;

  public static isTest = (): boolean => Env.nodeEnv === 'test';
  public static isDev = (): boolean => Env.nodeEnv === 'dev';
  public static isProduction = (): boolean => Env.nodeEnv === 'production';

}
