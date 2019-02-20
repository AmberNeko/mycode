$(target).animate({
                test: 0
            }, {
                    step: function (now, fx) {
                        if (fx.prop === 'test') {
                            $(this).css('transform', 'translateY(' + now + 'px)');
                        }
                    },
                    duration: 500
                }, 'linear'
            );
