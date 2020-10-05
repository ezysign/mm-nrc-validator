export interface ITownShip{
    SR_Code:string,
    SR_Name:string,
    Tsp_Code:string,
    Tsp_Name:string
}

export interface INRCTownShip {
    ID: number;
    nrc_township_code: string;
    nrc_township_name: string;
    nrc_sr_code: string;
    VoterID: any;
    voter: any;
}

export interface 

declare module '*.json' {
    const value: any;
    export const version: string;
    export default value;
  }
