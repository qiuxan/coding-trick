const squareIcons = {
    classic: faSquare,
    sharp: sharpSquare
}
const squareCheckIcons = {
    classic: faSquareCheck,
    sharp: sharpSquareCheck
}


icon = { shape === "circle" ?
    (checked ? faCircleCheck : faCircle)
    : (checked ? squareCheckIcons[shape === "square" ? "sharp" : "classic"] : squareIcons[shape === "square" ? "sharp" : "classic"])
