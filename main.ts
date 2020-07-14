input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    pins.servoWritePin(AnalogPin.P0, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    pins.servoWritePin(AnalogPin.P0, 180)
})
basic.forever(function () {
	
})
