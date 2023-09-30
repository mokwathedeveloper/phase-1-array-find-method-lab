// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(obj => obj.result === "W");
    return winningYear ? winningYear.year : undefined;
  }