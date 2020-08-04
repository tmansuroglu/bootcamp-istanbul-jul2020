function tpChecker(obj) {
        const tpSheets = 500; // sheets per toilet paper roll
        const tpConsumed = 57; // average consumed by person during one day
        const daysLeft = Math.round((obj.tp * tpSheets) / (obj.people * tpConsumed));
        if (daysLeft < 14) {
                return `Your TP will only last ${daysLeft} days, buy more!`;
        }
        return `Your TP will last ${daysLeft} days, no need to panic!`;
}

// tpChecker({ people: 1, tp: 4 });
tpChecker({ people: 5, tp: 20 });
