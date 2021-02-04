let humidité = 0
let défénir_graphe_de_1_à_1023 = 0
let bas = 0
let défénir_led_haut = 0
input.onButtonPressed(Button.A, function () {
    if (true) {
        humidité = pins.analogReadPin(AnalogPin.P0)
        humidité = pins.analogReadPin(AnalogPin.P1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 1023)
        if (true) {
            let haut = 0
            défénir_graphe_de_1_à_1023 = Math.map(1, 255.75, 511.5, 767.25, 1023)
            bas = 1
            défénir_led_haut = 1023
            led.plotBarGraph(
            bas,
            haut
            )
            basic.pause(2000)
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
	
})
