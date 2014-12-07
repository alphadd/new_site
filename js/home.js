$(window).load(function () {
    var $grid_item = $("#grid .grid-item");
    var $grid_icon = $("#grid-device .icon");

    $("#grid-slider").slider({
        value: 20,
        min: 20,
        max: 100,
        step: 5,
        slide: function (event, ui) {
            /*
             //console.log( ui.value );
             mobile: 1col - 100%
             tablet: 2cols - 50%
             tablet landscape: 4cols - 25%
             desktop: 5cols - 20%
             */
            var w = ui.value;
            $grid_icon.removeClass('loc');
            $grid_item.removeClass('tablet mobile tablet-landscape').css("width", w + '%');
            $grid_item.filter('.grid-item-2').css("left", w + '%');
            $grid_item.filter('.grid-item-3').css("left", (w * 2) + '%');
            $grid_item.filter('.grid-item-4').css("left", (w * 3) + '%');
            $grid_item.filter('.grid-item-5').css("left", (w * 4) + '%');

            if (ui.value == 100) {
                $grid_icon.filter('.iphone').addClass('loc');
            }
            else if (ui.value >= 50) {
                $grid_icon.filter('.tablet').addClass('loc');
            }
            else if (ui.value >= 25) {
                $grid_icon.filter('.tablet-landscape').addClass('loc');
            }
            else {
                $grid_icon.filter('.desktop').addClass('loc');
            }
        }
    });
});
