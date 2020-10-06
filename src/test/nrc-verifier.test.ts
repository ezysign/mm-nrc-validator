import { validateNRC,verifyNRC,getMatchNRC,extractNrcInfo } from './../index';
describe('Calculate Action', () => {
  test('should throw error on invalid params ', () => {
    expect(validateNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual(true)
    expect(validateNRC('၁၂/မဂတ(နိုင်)၀၇၆၄')).toEqual(false)
  })

  test('should returnNRCMatchArr', () => {
    expect(getMatchNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual([ '၁၂/မဂတ(နိုင်)၀၉၈၇၆၄', '၁၂', 'မဂတ', '(နိုင်)', '၀၉၈၇၆၄' ])
    expect(()=>getMatchNRC('၁၂/မဂတ(နိုင်)asdf')).toThrowError("Invalid NRC Number")
  })


  test('should verifyNRC', () => {
    expect(verifyNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual(true)
    expect(verifyNRC('၁၂/မဝဝ(နိုင်)၀၉၈၇၆၄')).toEqual(false)
    
  }) 
  test('should extract Info', () => {
    
    expect(extractNrcInfo('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual({
        sr_code_en: '12',
        sr_code_mm: '၁၂',
        citizenship_status: '(နိုင်)',
        township_code_mm: 'မဂတ',
        sr_name: 'ရန်ကုန်တိုင်းဒေသကြီး',
        township_name: 'မင်္ဂလာတောင်ညွန့်'
      })

      expect(extractNrcInfo('၁၂/ကဘဘ(နိုင်)၀၉၈၇၆၄')).toEqual(undefined)
      expect(extractNrcInfo('၁/ကဘဘ(နိုင်)၀၉၈၇၆၄')).toEqual(undefined)
    
  })

})