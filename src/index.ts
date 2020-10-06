

import * as township from './township.json';
import * as nrccode from './nrccode.json';
import { INRCData, INRCTownShip, ITownShip } from '../types/custom-typings';



const NRC_REGEX=/([၀-၉]{1,2})\/([ကခဂဃငစဆဇဈညဎဏတထဒဓနပဖဗဘမယရလဝသဟဠဥဧ]{3})(\([နိုင်,ဧည့်,ပြု,စ,သာ,သီ]{1,6}\))([၀-၉]{6})$/gm;
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



export const getMatchNRC = (input:string):string[]=>{
    if(!(validateNRC(input.trim()))){
        throw Error("Invalid NRC Number")
    }
    let m:RegExpExecArray | null; 
    const matchArr:string[]=[];
    const regExr= new RegExp(NRC_REGEX)
    while ((m = regExr.exec(input.trim())) !== null) {
        
        if (m.index === regExr.lastIndex) {
            regExr.lastIndex++;
        }   

        
        m.forEach((match) => {
            matchArr.push(match)
        });
    }
    return matchArr
}

export const validateNRC=(input:string):boolean=>{
    const regExr= new RegExp(NRC_REGEX)
    return regExr.test(input.trim())
}

export const verifyNRC=(input:string):boolean=>{
    if(!(validateNRC(input.trim()))){
        throw Error("Invalid NRC Number")
    }
    const matchArr=getMatchNRC(input.trim())
    const nrcSRCode = `${matchArr[1]}/`
    const nrcTownShipCode= `${matchArr[2]}`

    return nrccode.data.some((item:INRCTownShip)=> item.nrc_sr_code === nrcSRCode && item.nrc_township_code===nrcTownShipCode)
}

export const extractNrcInfo=(input:string):INRCData|undefined=>{
    
    if(!(validateNRC(input.trim()))){
        throw Error("Invalid NRC Number")
    }

    const matchArr=getMatchNRC(input.trim())
    
    const citizenShipStatus = `${matchArr[3]}`
    const nrcSRCodebackSlash = `${matchArr[1]}/`
    const nrcSRCode = `${matchArr[1]}`
    const nrcTownShipCode= `${matchArr[2]}`
    const nrcSrEnglish=nrcSRCode.split("").map((char:string)=>MM_NUM_2_EN_NUM[char]).join("")
    
    
    const nrc = nrccode.data.find((item:INRCTownShip)=>item.nrc_sr_code === nrcSRCodebackSlash && item.nrc_township_code===nrcTownShipCode) 
    
    if(!nrc){
        return undefined
    }
    const townShip=township.data.find((item:ITownShip)=>item.SR_Code===nrcSrEnglish)
    if(!townShip){
        return undefined
    }
    const nrcData:INRCData={
        sr_code_en:nrcSrEnglish,
        sr_code_mm:nrcSRCode,
        citizenship_status:citizenShipStatus,
        township_code_mm:nrc.nrc_township_code,
        sr_name:townShip.SR_Name,
        township_name:nrc.nrc_township_name,
    }
    return nrcData
    
}






