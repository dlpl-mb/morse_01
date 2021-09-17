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
    basic.showString(receivedString)
    if (receivedString.includes(".")) {
        music.ringTone(262)
        basic.pause(200)
    } else {
        music.ringTone(262)
        basic.pause(600)
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
