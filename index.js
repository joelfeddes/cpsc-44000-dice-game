function RollSixSidedDie() {
    roll = Math.floor(Math.random()*6) + 1;
    roll += Math.floor(Math.random()*6) + 1;
    roll += Math.floor(Math.random()*6) + 1;
    document.getElementById("dice").innerHTML = roll;
}
