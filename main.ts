basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 250) {
        radio.sendString("ON")
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.Square)
        basic.pause(100)
        basic.clearScreen()
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        radio.sendString("OFF")
        music.stopAllSounds()
        basic.clearScreen()
    }
})
