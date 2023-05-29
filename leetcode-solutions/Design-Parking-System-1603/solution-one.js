var ParkingSystem = function (big, medium, small) {
  this.count = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */

ParkingSystem.prototype.addCar = function (carType) {
  if (this.count[carType - 1]) {
    this.count[carType - 1]--;
    return true;
  } else {
    return false;
  }
};
