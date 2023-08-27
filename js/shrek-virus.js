var shrek = {
    main: function(element, event, wrapper) {
        this.events.handler(element, event, wrapper);
    },
    run: function(wrapper) {
        this.setWindowMarkers(wrapper);
        let this_ = this;
        let delay = 2000;
        let changeDelay = function() {
            let minDelay = 0;
            if (delay > minDelay) {
                delay -= 100;
            } else if (delay < minDelay) {
                delay = minDelay;
            }
            return delay
        };
        let runWindows = function() {
            let marker = this_.getWindowMarker();
            $(wrapper).find(marker).clone().css({
                top: String(this_.getTop($('.shrek-error'))) + 'px',
                left: String(this_.getLeft($('.shrek-error'))) + 'px',
                display: 'block'
            }).appendTo('body .container');
            $('.container ' + marker).find('.close').on('click', function() {
                $(this).parent().parent().remove();
            });
        };
        async function run() {
            for (let i = 0; i < 256; i++)  {
                runWindows();
                await this_.sleep(changeDelay());
            }
        }
        run();
    },
    events: {
        handler: function(element, event, wrapper) {
            $(element).on(event, function() {
                shrek.run(wrapper);
                return false;
            });
        }
    },
    markers: [],
    setWindowMarkers: function(wrapper) {
        let this_ = this;
        $(wrapper).find('[data-is-window="true"]').each(function(i) {
            $(this).attr('data-marker', i);
            this_.markers.push('[data-marker="' + String(i) + '"]');
        });
        return this.markers;
    },
    getWindowMarker: function() {
        let count = this.markers.length;
        if (count === 1) {
            return this.markers[0];
        } else {
            let index = this.getRandomIntInclusive(0, count - 1);
            return this.markers[index];
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
    },
    sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};