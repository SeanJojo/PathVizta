// Renders the world grid onto the DOM
export function renderWorldGrid(worldGridParameters){
  // Creating accessor for the grid container
  const worldGridContainer = document.getElementById('world-grid-container');

  const worldGrid = document.createElement('div');
  worldGrid.setAttribute('class', 'world-grid');
  worldGrid.setAttribute('id', 'world-grid');
  worldGridContainer.appendChild(worldGrid);
  
  // Rendering world grid to DOM
  for (let row = 0; row < worldGridParameters.rows; row++ ){
    for (let column = 0; column < worldGridParameters.columns; column++ ){
      const gridItem = document.createElement('div');
      gridItem.setAttribute('class', 'grid-item')
      gridItem.setAttribute('id', `${row}-${column}`);
      gridItem.style.height = worldGridParameters.gridSquareSize;
      gridItem.style.width = worldGridParameters.gridSquareSize;
      
      if(row === worldGridParameters.defaultStartCell.row & column === worldGridParameters.defaultStartCell.column){
        gridItem.setAttribute('data-celltype', 'start'); // initialize default start cell
        gridItem.innerHTML = worldGridParameters.startCellIcon;
      }else if(row === worldGridParameters.defaultGoalCell.row & column === worldGridParameters.defaultGoalCell.column){
        gridItem.setAttribute('data-celltype', 'goal'); // initialize default goal cell
        gridItem.innerHTML = worldGridParameters.goalCellIcon;
      }else{
        gridItem.setAttribute('data-celltype', 'empty'); // initialize all other cells as empty
      }
      worldGrid.appendChild(gridItem);
      worldGrid.style.gridTemplateColumns = (String(worldGridParameters.gridSquareSize) + "px ").repeat(worldGridParameters.columns)
    }
  }
  allowObstacleDrawing(); // allow obstacle drawing
}


export function readWorldGridState(worldGridParameters){
  const worldGrid = document.getElementById('world-grid')
  let currentWorldGridState = [];

  for (let row = 0; row < worldGridParameters.rows; row++ ){
    // Create a row with the required columns, filling with zeros by default
    currentWorldGridState.push(Array(worldGridParameters.columns).fill(0));
    // Index each cell in the newly created column and populate them with the DOM element's celltype value
    for (let column = 0; column < worldGridParameters.columns; column++ ){
      currentWorldGridState[row][column] = document.getElementById(`${row}-${column}`).dataset.celltype; //store just the cell type
    }
  }
  return currentWorldGridState;
}

export function allowObstacleDrawing(){
  let gridItems = document.getElementsByClassName('grid-item')
  gridItems = Array.from(gridItems) //Create array from HTMLCollections object


  let drawObstaclesActive = false;
  document.getElementById('world-grid-container').onmousedown = () => (drawObstaclesActive = !drawObstaclesActive); // Start drawing from a click and stop when there is another click

  gridItems.forEach((currentItem) => {
    currentItem.addEventListener('mouseover', () => {
      if(drawObstaclesActive === true){
        if(currentItem.dataset.celltype === 'empty'){
          currentItem.dataset.celltype = 'obstacle';
          currentItem.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--obstacle-color'); // get obstacle color from stylesheet
        }else if(currentItem.dataset.celltype = 'obstacle'){
          currentItem.dataset.celltype = 'empty';
          currentItem.style.backgroundColor = ''; //remove the style object and revert to default
        }else{ //if start and goal cells, do nothing
          null
          console.log('doing nothing, man')
        }
      }
      })
    })
  } 

  export function resetWorldGrid(worldGridParameters){
    const worldGridContainer = document.getElementById('world-grid-container');
    worldGridContainer.innerHTML = ''; //removing all grid-container children
    renderWorldGrid(worldGridParameters); //re-rendering world grid
  }







