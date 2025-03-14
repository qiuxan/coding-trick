type ShapeType = 'square' | 'circle' | 'rounded-square' | 'thin-square';


function getIcon(shape: ShapeType, checked: boolean): IconDefinition |IconDefinition2 {

    type IconRecord = Record<typeof shape, IconDefinition|IconDefinition2>

    const squareIcons: IconRecord = {
        'rounded-square': faSquare,
        'square': sharpSquare,
        'circle': faCircle,
        'thin-square': thinSquare
    };

    const squareCheckIcons: IconRecord = {
        'rounded-square': faSquareCheck,
        'square': sharpSquareCheck,
        'circle': faCircleCheck,
        'thin-square': faSquareCheck
    };

    if (checked) {
        return squareCheckIcons[shape];
    }

    return squareIcons[shape];
}