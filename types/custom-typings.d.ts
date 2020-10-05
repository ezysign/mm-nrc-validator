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

export interface INRCData{
    sr_code_en:string,
    sr_code_mm:string,
    township_code_mm:string,
    sr_name:string,
    citizenship_status:"(နိုင်)"|"(ဧည့်)"|"(ပြု)"|"(စ)"|"(သာ)"|"(သီ)"|string,
    township_name:string,
}

declare module '*.json' {
    const value: any;
    export const version: string;
    export default value;
  }
