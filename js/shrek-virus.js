var shrek = {
    main: function(element) {
        this.events.btnClick.handler(element);
    },
    run: function() {
        $('.antivirus-error').clone().css({
            top: String(this.getTop($('.antivirus-error'))) + 'px',
            left: String(this.getLeft($('.antivirus-error'))) + 'px',
            display: 'block'
        }).appendTo('body');

    },
    events: {
        btnClick: {
            handler: function(element) {
                element.on('click', function() {
                    shrek.run();
                    return false;
                });
            }
        }
    },
    getTop: function(modalWindow) {
        let margin = {
            left: 0,
            right: this.getSizeDisplay().height - modalWindow.height()
        };
        return this.getRandomIntInclusive(margin.left, margin.right);
    },
    getLeft: function(modalWindow) {
        let margin = {
            left: 0,
            right: this.getSizeDisplay().width - modalWindow.width()
        };
        return this.getRandomIntInclusive(margin.left, margin.right);
    },
    getSizeDisplay: function() {
        return {
            width: $(window).width(),
            height: $(window).height()
        };
    },
    getRandomIntInclusive: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};