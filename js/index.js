var time = 0, // time to go in seconds
    timeoutId = null,
    remainingLabel = null;

var tick = function() {
    if (--time > 0) {
        renderTime();
        timeoutId = setTimeout(tick, 1000);
    } else {
        stopTimer();
    }
};

var renderTime = function() {
    // always show two digits
    var minutes = ("0" + Math.floor(time / 60)).slice(-2),
        seconds = ("0" + (time % 60)).slice(-2);

    remainingLabel.text([ minutes, seconds ].join(':'));
};

var startTimer = function() {
    stopTimer();

    if (time === 0) {
        time = 25 * 60;
    }

    timeoutId = setTimeout(tick, 1000);
};

var stopTimer = function() {
    clearTimeout(timeoutId);
};

var stopTimer = function() {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
};

var resetTimer = function() {
    stopTimer();

    time = 25 * 60;
    renderTime();
};

var registerEventHandlers = function() {
    $('button[name="start"]').click(startTimer);
    $('button[name="stop"]').click(stopTimer);
    $('button[name="reset"]').click(resetTimer);
};

$(document).ready(function() {
    // cache field, so it does not have to be queried every time
    remainingLabel = $('#remaining-label');

    registerEventHandlers();
});