input.onButtonPressed(Button.A, function on_button_pressed_a() {
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    pins.servoWritePin(AnalogPin.P0, 0)
})
basic.forever(function on_forever() {
    
})
