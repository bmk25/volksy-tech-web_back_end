export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // hello	  
    var task = true;
    // hello 	  
    var task2 = false;
  }

  return [task, task2];
}
