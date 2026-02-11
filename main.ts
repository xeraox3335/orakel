input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showIcon(IconNames.No)
        basic.setLedColor(0xff0000)
    }
})
