import blockMobile from './utilities/blockMobile.js'
import {renderWorldGrid, readWorldGridState} from './grid/gridUtilities.js'

const worldGridParameters = {
  //do not exceed 20 rows and 54 columns
  'rows': 20,
  'columns': 54,
  'gridSquareSize': 30, //px
  'defaultStartCell': {'row': 10, 'column': 20},
  'defaultGoalCell': {'row': 10, 'column': 25}
}

//blockMobile(); // Block functionality on mobile devices
let worldGridState = renderWorldGrid(worldGridParameters); 


worldGridState = readWorldGridState(worldGridParameters)
