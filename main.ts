radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 0) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber < 1) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(300)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(300)
    basic.clearScreen()
})
radio.setGroup(193)
