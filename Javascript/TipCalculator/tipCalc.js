
function calcTip(amount, tip) {
    var amt = parseFloat(amount);
    var tips = parseFloat(tip);
    var result = amt + tips / 100 *amt;
    alert("The total sum  with tip is: \n"+ result);
}


