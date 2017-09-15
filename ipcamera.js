var host = '10.0.0.2:81';
var login = 'admin';
var pass = '888888'

$(function () {
    $('#clock-btn').click(function () {
        $('#clocks-modal').modal('show')
    });
    $('#left-btn').click(function () {
        $('.fa-arrow-left').css('color', 'gray');
        $.ajax({
            url: 'http://' + host + '/decoder_control.cgi?command=4',
            success: function () {
                $.ajax({
                    url: 'http://' + host + '/decoder_control.cgi?command=0',
                    success: function () {
                        $('.fa-arrow-left').css('color', 'black');
                    },
                    error: function () {
                        $('#camera-status').text('(connection error)');
                        $('.fa-arrow-left').css('color', 'red');
                    }
                });
            },
            error: function () {
                $('#camera-status').text('(connection error)');
                $('.fa-arrow-left').css('color', 'red');
            }
        });
    });
    $('#down-btn').click(function () {
        $('.fa-arrow-down').css('color', 'gray');
        $.ajax({
            url: 'http://' + host + '/decoder_control.cgi?command=2',
            success: function () {
                $.ajax({
                    url: 'http://' + host + '/decoder_control.cgi?command=0',
                    success: function () {
                        $('.fa-arrow-down').css('color', 'black');
                    },
                    error: function () {
                        $('#camera-status').text('(connection error)');
                        $('.fa-arrow-down').css('color', 'red');
                    }
                });
            },
            error: function () {
                $('#camera-status').text('(connection error)');
                $('.fa-arrow-down').css('color', 'red');
            }
        });
    });
    $('#up-btn').click(function () {
        $('.fa-arrow-up').css('color', 'gray');
        $.ajax({
            url: 'http://' + host + '/decoder_control.cgi?command=1',
            success: function () {
                $.ajax({
                    url: 'http://' + host + '/decoder_control.cgi?command=0',
                    success: function () {
                        $('.fa-arrow-up').css('color', 'black');
                    },
                    error: function () {
                        $('#camera-status').text('(connection error)');
                        $('.fa-arrow-up').css('color', 'red');
                    }
                });
            },
            error: function () {
                $('#camera-status').text('(connection error)');
                $('.fa-arrow-up').css('color', 'red');
            }
        });
    });
    $('#right-btn').click(function () {
        $('.fa-arrow-right').css('color', 'gray');
        $.ajax({
            url: 'http://' + host + '/decoder_control.cgi?command=6',
            success: function () {
                $.ajax({
                    url: 'http://' + host + '/decoder_control.cgi?command=0',
                    success: function () {
                        $('.fa-arrow-right').css('color', 'black');
                    },
                    error: function () {
                        $('#camera-status').text('(connection error)');
                        $('.fa-arrow-right').css('color', 'red');
                    }
                });
            },
            error: function () {
                $('#camera-status').text('(connection error)');
                $('.fa-arrow-right').css('color', 'red');
            }
        });
    });
});

var interval;

$('#clocks-modal').on('show.bs.modal', function (e) {
    interval = setInterval(function () {
        var date = new Date();
        $('#time-field').text(date.toLocaleTimeString());
    }, 1000);
    $('#adjust-clock').click(function () {
        // adjust
        $.ajax({
            url: 'http://' + host + '/set_datetime.cgi?loginuse=' + login + '&loginpas=' + pass + '&now=' + Date.now(),
            success: function () {
                $('#clock-btn').css('color', 'green');
            },
            error: function () {
                $('#camera-status').text('(connection error)');
                $('#clock-btn').css('color', 'red');
            }
        });
        clearInterval(interval);
        $('#clocks-modal').modal('hide');
    });
});

$('#clocks-modal').on('hide.bs.modal', function (e) {
    clearInterval(interval);
    $('#clocks-modal').modal('hide')
});
