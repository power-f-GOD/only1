/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class GetImage {
  private static baseUrl = '/img/';

  static misc(avatar: string) {
    return `${this.baseUrl}${avatar}.webp`;
  }
}
