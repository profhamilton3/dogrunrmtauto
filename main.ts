input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Triangle)
    xgo.move_xgo(xgo.direction_enum.Forward, 65)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Sit_down)
    basic.showLeds(`
        # . . . #
        . . # . .
        . . # . .
        . . . . .
        # # # # #
        `)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.LeftTriangle)
    xgo.rotate(xgo.rotate_enum.Left, 40)
    basic.pause(500)
    xgo.execution_action(xgo.action_enum.Sit_down)
    basic.showLeds(`
        # . . . #
        . . # . .
        . . # . .
        . . . . .
        # # # # #
        `)
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
    xgo.execution_action(xgo.action_enum.Wave)
    radio.sendString(xgo.get_version())
})
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
xgo.execution_action(xgo.action_enum.Stand)
radio.setGroup(3)
radio.setFrequencyBand(33)
basic.showLeds(`
    # . . . #
    . . # . .
    . . # . .
    . . . . .
    # # # # #
    `)
