

function theBeatlesPlay(muso, inst) {
  var comment = [];
  var idx = muso.length;
  if(idx > inst.length) {
    idx = inst.length;
  }
  
  for(var i = 0;i<idx;i++) {
    comment[i] = muso[i] + " " + inst[i];
  }
  return comment;
}

function johnLennonFacts(array) {
  
}