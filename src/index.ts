

import * as township from './township.json';
import * as nrccode from './nrccode.json';
import { INRCTownShip, ITownShip } from '../types/custom-typings';



const NRC_REGEX=/([၀-၉]{1,2})\/([ကခဂဃငစဆဇဈညဎဏတထဒဓနပဖဗဘမယရလဝသဟဠဥဧ]{3})(\([နိုင်,ဧည့်,ပြု,စ,သာ,သီ]{1,6}\))([၀-၉]{6})$/gm;
const NRC_CODES=nrccode.data
const TOWN_SHIP=township.data
const MM_NUM_2_EN_NUM={
    "၀":"0",
    "၁":"1",
    "၂":"2",
    "၃":"3",
    "၄":"4",
    "၅":"5",
    "၆":"6",
    "၇":"7",
    "၈":"8",
    "၉":"9"
}

const regExr= new RegExp(NRC_REGEX)

export const getMatchNRC = (input:string):string[]=>{
    let m;
    const matchArr:string[]=[];
    while ((m = regExr.exec(input)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regExr.lastIndex) {
            regExr.lastIndex++;
        }   

        // The result can be accessed through the `m`-variable.
        m.forEach((match) => {
            matchArr.push(match)
        });
    }
    return matchArr
}

export const validateNRC=(input:string):boolean=>{
    return regExr.test(input.trim())
}

export const verifyNRC=(input:string):boolean=>{

    const matchArr=getMatchNRC(input.trim())
    const nrcSRCode = `${matchArr[1]}/`
    const nrcTownShipCode= `${matchArr[2]}`
    return nrccode.data.some((item:INRCTownShip)=> item.nrc_sr_code === nrcSRCode && item.nrc_township_code===nrcTownShipCode)
}

export const extractNrcInfo=(input:string):boolean=>{
    
    const matchArr=getMatchNRC(input.trim())
    const nrcSRCodebackSlash = `${matchArr[1]}/`
    const nrcSRCode = `${matchArr[1]}`
    const nrcTownShipCode= `${matchArr[2]}`
    nrcSRCode.split("").map((char:string)=>MM_NUM_2_EN_NUM[char]).join("")
    
    return nrccode.data.some((item:INRCTownShip)=> item.nrc_sr_code === nrcSRCodebackSlash && item.nrc_township_code===nrcTownShipCode)
}




