import blockSmallScreens from './utilities/blockSmallScreens.js'
import {renderWorldGrid, readWorldGridState, resetWorldGrid} from './grid/gridUtilities.js'
import './utilities/theme.js' //to activate them toggling (this is enough to work since it executes on import)
import { activateDragAndDrop } from './utilities/dragdrop.js' //activate dragdrop

const worldGridParameters = {
  //do not exceed 20 rows and 54 columns
  'rows': 22,
  'columns': 54,
  'gridSquareSize': 30, //px
  'defaultStartCell': {'row': 10, 'column': 20},
  'defaultGoalCell': {'row': 10, 'column': 35},
  'startCellIcon': `<svg class='start-cell-icon' id='start-cell-icon' draggable='true' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-drop-circle</title><path id='start-cell-icon-path' d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z" /></svg>`,
  'goalCellIcon': `<svg class='goal-cell-icon' id='goal-cell-icon' draggable='true' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bullseye-arrow</title><path id='goal-cell-icon-path' d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z" /></svg>`
}



//blockSmallScreens(); // Block functionality on Small-Screen devices
renderWorldGrid(worldGridParameters); // Initial rendering of world grid
document.getElementById('reset-world-grid-btn').addEventListener('click', () => resetWorldGrid(worldGridParameters));

var worldGridState;

document.getElementById('visualize-btn').addEventListener('click', () =>{
  // read all data and send to algorithm runner
  worldGridState = readWorldGridState(worldGridParameters);
  //console.log(worldGridState)
})





// let worldGridState = readWorldGridState(worldGridParameters)

//activateDragAndDrop(worldGridState); // must be called after rendering the grid

// Consider a game loop idea for the main function




