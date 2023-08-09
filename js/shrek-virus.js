var shrek = {
    main: function() {
        this.events.btnClick.handler();
    },
    events: {
        btnClick: {
            handler: function() {
                $('.run-virus').on('click', function() {
                    alert('It\'s working!');
                    return false;
                });
            }
        }
    }
};