let SwitchButton = function (status) {
    this.status = status;

    this.connectToLamp = function (lamp) {
        console.log("Da ket noi voi ");
    }

    this.switchOn = function (lamp) {
        this.status = true;
        console.log(lamp.turnOn());
    }
    this.switchOff = function (lamp) {
        this.status =false;
        console.log(lamp.turnOff());
    }
    this.turnButton = function (lamp) {
        for (let i=0;i<10;i++){
            this.switchOn(lamp);
            this.switchOff(lamp);
        }
    }
}