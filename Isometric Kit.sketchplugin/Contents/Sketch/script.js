var isometricTop = function(context) {
    var doc = context.document;

    var selection = context.selection;
    var layer = selection.firstObject();
    if(layer && layer.isKindOfClass(MSShapeGroup)) {
        var shape=layer.layers().firstObject();
        if(shape && shape.isKindOfClass(MSRectangleShape)) {
            shape.setCornerRadiusFromComponents("15/15/0/0");

            var frame = shape.absoluteRect;
            frame.expandBy = 2;
            log(frame);
            // shape.width = shape.width * .86602;
        }
    }
}

var isometricLeft = function(context) {

}

var isometricRight = function(context) {

}
