# MM-NRC-Validator

**Myanmar NRC Validator for Javascript that validates the NRC format using township data**


## Usage

### Javascript
```
const NRCValidator = require('../dist')

console.log(NRCValidator.verifyNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
console.log(NRCValidator.getMatchNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
console.log(NRCValidator.validateNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
console.log(NRCValidator.extractNrcInfo('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
```

### TypeScript

```
import * as NRCValidator from '../dist'

console.log(NRCValidator.verifyNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
console.log(NRCValidator.getMatchNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
console.log(NRCValidator.validateNRC('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
console.log(NRCValidator.extractNrcInfo('၁၂/မဂတ(နိုင်)၀၉၈၇၆၄'))
```

## License

MIT


