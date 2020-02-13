function mapToNegativize(sourcearray) {
  let arr= []
  for (let i = 0; i <  sourcearray.length; i++ ) {
    arr[i]=sourcearray[i]*(-1)
  }
   return arr
}

function mapToNoChange(sourcearray) {
  let arr= []
  for (let i = 0; i <  sourcearray.length; i++ ) {
    arr[i]= sourcearray[i];
  }
   return arr
}

function mapToDouble( sourcearray) {
  let arr= []
  for (let i = 0; i <  sourcearray.length; i++ ) {
    arr.push(2 *  sourcearray[i])
  }
   return arr
}

function mapToSquare( sourcearray) {
  let arr= []
  for (let i = 0; i <  sourcearray.length; i++ ) {
    arr.push( sourcearray[i] *  sourcearray[i])
  }
   return arr
}

function reduceToTotal( sourcearray) {
  let total = startingPoint=0;
  for (let i = 0; i <  sourcearray.length; i++ ) {
    total = total +  sourcearray
  }
  return total
}

function reduceToAllTrue( sourcearray) {
  for (let i = 0; i <  sourcearray.length; i++ ) {
    if (! sourcearray[i]) return false
  }
  return true
}

function reduceToAnyTrue( sourcearray) {
  for (let i = 0; i <  sourcearray.length; i++ ) {
    if ( sourcearray[i]) return true
  }
  return false
}