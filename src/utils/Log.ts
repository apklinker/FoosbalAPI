export default class Log {

  public static d(message?: any, ...optionalParams: any[]): void {
    if (optionalParams.length > 0) {
      // tslint:disable-next-line:no-console
      console.log(message, ...optionalParams);
    } else {
      // tslint:disable-next-line:no-console
      console.log(message);
    }
  }

  public static e(message?: any, ...optionalParams: any[]): void {
    if (optionalParams.length > 0) {
      // tslint:disable-next-line:no-console
      console.error(message, ...optionalParams);
    } else {
      // tslint:disable-next-line:no-console
      console.error(message);
    }
  }

  public static v(message?: any, ...optionalParams: any[]): void {
    if (optionalParams.length > 0) {
      // tslint:disable-next-line:no-console
      console.info(message, ...optionalParams);
    } else {
      // tslint:disable-next-line:no-console
      console.info(message);
    }
  }

}
