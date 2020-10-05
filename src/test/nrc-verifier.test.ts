import { validateNRC,verifyNRC,getMatchNRC,extractNrcInfo } from './../index';
describe('Calculate Action', () => {
  test('should throw error on invalid params ', () => {
    expect(validateNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual(true)
    expect(validateNRC('၁၂/မဂတ(နိုင်)၀၇၆၄')).toEqual(false)
  })

  test('should returnNRCMatchArr  ', () => {
    expect(getMatchNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual([ '၁၂/မဂတ(နိုင်)၀၉၈၇၆၄', '၁၂', 'မဂတ', '(နိုင်)', '၀၉၈၇၆၄' ])
    expect(getMatchNRC('၁၂/မဂတ(နိုင်)asdf')).toEqual([])
  })


  test('should verifyNRC  ', () => {
    expect(verifyNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual(true)
    // expect(verifyNRC('၁၂/မဂတ(နိုင်)၀၇၆၄')).toEqual(false)
  }) 
  test('should verifyNRC  ', () => {
    expect(extractNrcInfo('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄')).toEqual(true)
    
  })

})