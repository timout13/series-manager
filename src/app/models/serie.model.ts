import { Commments } from './commments.model';
export class Serie {
  private _id: number;
  private _name: string;
  private _dateBegin: Date;
  private _nbSeason: number;
  private _description: string;
  private _imgUrl: string;
  private _review: string;
  private _commments: Commments[];

  constructor(
    name: string,
    dateBegin: string | Date,
    nbSeason: number,
    description: string,
    imgUrl: string,
    review: string,
    commments: Commments[],
    id: number
  ) {
    this._id = id;
    this._name = name;
    this._dateBegin =
      typeof dateBegin === 'string' ? new Date(dateBegin) : dateBegin;
    this._nbSeason = nbSeason;
    this._description = description;
    this._imgUrl = imgUrl;
    this._review = review;
    this._commments = commments;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter dateBegin
   * @return {Date}
   */
  public get dateBegin(): Date {
    return this._dateBegin;
  }

  /**
   * Getter nbSeason
   * @return {number}
   */
  public get nbSeason(): number {
    return this._nbSeason;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter imgUrl
   * @return {string}
   */
  public get imgUrl(): string {
    return this._imgUrl;
  }

  /**
   * Getter review
   * @return {string}
   */
  public get review(): string {
    return this._review;
  }

  /**
   * Getter commments
   * @return {Commments[]}
   */
  public get commments(): Commments[] {
    return this._commments;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter dateBegin
   * @param {Date} value
   */
  public set dateBegin(value: Date) {
    this._dateBegin = value;
  }

  /**
   * Setter nbSeason
   * @param {number} value
   */
  public set nbSeason(value: number) {
    this._nbSeason = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter imgUrl
   * @param {string} value
   */
  public set imgUrl(value: string) {
    this._imgUrl = value;
  }

  /**
   * Setter review
   * @param {string} value
   */
  public set review(value: string) {
    this._review = value;
  }

  /**
   * Setter commments
   * @param {Commments[]} value
   */
  public set commments(value: Commments[]) {
    this._commments = value;
  }
}
