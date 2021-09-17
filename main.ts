input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.sendString(".")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes(".")) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        music.playTone(262, music.beat(BeatFraction.Breve))
        basic.showString("-")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("-")
    radio.sendString("-")
})
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
radio.setGroup(25)
