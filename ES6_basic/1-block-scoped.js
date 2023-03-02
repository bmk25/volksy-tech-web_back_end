export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line	  
    var task = true;
    // eslint-disable-next-line 
    var task2 = false;
  }

  return [task, task2];
}
