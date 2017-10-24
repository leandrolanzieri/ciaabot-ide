import { Injectable } from '@angular/core';
import * as firmata from 'firmata';
import * as deasync from 'deasync';

@Injectable()
export class FirmataService {

    private Board: typeof firmata;
    private Deasync: typeof deasync;
    // private myScript;
    // private spawn;
    constructor() {
        // this.myScript = window.require('./assets/js/firmata-test.js');
        // this.spawn = window.require('child_process').spawn;
        this.Board = window.require('firmata');
        this.Deasync = window.require('deasync');
    }

    public executeOnline() {
        // const t = this.spawn('node', [this.myScript], {});

        // t.on('data', (data) => {
        //     console.log(data.toString());
        // });

        this.Board.requestPort(function (error, port) {

            /**
             * Reads a digital pin synchronously
             * @param {Board} board
             * @param {number} pin
             */
            function digitalReadBlocking(board, pin) {
                let read = null;
                board.digitalRead(pin, function (value) {
                    read = value;
                });
                while (read === null) {
                    this.Deasync.sleep(10);
                }
                return read;
            }

            /**
             * Reads an analog pin synchronously
             * @param {Board} board
             * @param {number} pin
             */
            function analogReadBlocking(board, pin) {
                let read = null;
                board.analogRead(pin, function (value) {
                    read = value;
                });
                while (read === null) {
                    this.Deasync.sleep(10);
                }
                return read;
            }

            if (error) {
                console.log(error);
                return;
            }

            const board = new this.Board(port.comName);

            function main() {

                eval(`
                    var arduino = {
                        pin: 12,
                        led: 13,
                        analog: 0
                    }
                    var ciaa = {
                        pin: 7,
                        led: 4,
                        analog: 1
                    }

                    var pin = null;
                    var led = null;
                    var analog = null;
                    var state = 1;

                    console.log("Setup");

                    if (board.firmware.name === 'StandardFirmata.ino') {
                        board.pinMode(arduino.pin, board.MODES.INPUT);
                        board.pinMode(arduino.led, board.MODES.PWM);
                        board.pinMode(arduino.analog, board.MODES.ANALOG);

                        pin = arduino.pin;
                        led = arduino.led;
                        analog = arduino.analog;
                    } else {
                        board.pinMode(ciaa.pin, board.MODES.INPUT);
                        board.pinMode(ciaa.led, board.MODES.PWM);
                        board.pinMode(ciaa.analog, board.MODES.ANALOG);

                        pin = ciaa.pin;
                        led = ciaa.led;
                        analog = ciaa.analog;
                        console.log(board.firmware.name);
                    }

                    // console.log(board.pins);

                    while (true) {
                        console.log("Analog: ", analogReadBlocking(board, analog))
                        console.log("Digital: ", digitalReadBlocking(board, pin));
                        // board.digitalWrite(led, (state ^= 1));
                        this.Deasync.sleep(500);
                    }`);
            }

            board.on('ready', function () {
                setTimeout(main, 1);
            });

            board.on('close', () => {
                console.log('Disconnected');
            });

        });
    }
}
