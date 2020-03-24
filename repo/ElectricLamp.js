let ElectricLamp = function (status) {
    this.status = status;

    this.turnOn = function () {
        this.status = true;
        console.log("Lamp turn on");
    }
    this.turnOff = function () {
        this.status = false;
        console.log("Lamp turn off");
    }
}