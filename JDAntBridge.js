function antBridge(ants, terrain) {
  let arr = ants.split('');
  for ( let i=0; i<terrain.length; i++){
    if ([terrain[i],terrain[i+1], terrain[i-1]].includes('.')){
      arr.unshift(arr.pop());
    }
  }
  return arr.join('');
}
let ants = 'ABCDEF';
let terrain = '-----...-----';
console.log(antBridge(ants,terrain));