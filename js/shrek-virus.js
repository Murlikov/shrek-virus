var shrek = {
    main: function(element, event) {
        this.events.handler(element, event);
    },
    run: function() {
        $('.modal-windows-list .shrek-error').clone().css({
            top: String(this.getTop($('.shrek-error'))) + 'px',
            left: String(this.getLeft($('.shrek-error'))) + 'px',
            display: 'block'
        }).appendTo('body .container');
        $('.container .shrek-error').find('.close').on('click', function() {
            $(this).parent().parent().remove();
        });

    },
    events: {
        handler: function(element, event) {
            $(element).on(event, function() {
                shrek.run();
                return false;
            });
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