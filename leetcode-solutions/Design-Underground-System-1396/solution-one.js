let customerCurrentlyRidingMap = new Map();
let totalTimeFromStationToStationMap = new Map();
let countStationToStationMap = new Map();

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  customerCurrentlyRidingMap.set(id, {
    StationName: stationName,
    CheckInTime: t,
  });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let customerCheckInDetails = customerCurrentlyRidingMap.get(id);

  // set up key
  let stationToStationKey =
    customerCheckInDetails.StationName + "###" + stationName;

  // log the time
  let timePassed = t - customerCheckInDetails.CheckInTime;

  let currentTotal = totalTimeFromStationToStationMap.get(stationToStationKey);

  if (currentTotal == null) {
    totalTimeFromStationToStationMap.set(stationToStationKey, timePassed);
    countStationToStationMap.set(stationToStationKey, 1);
  } else {
    let newTotal = currentTotal + timePassed;
    totalTimeFromStationToStationMap.set(stationToStationKey, newTotal);

    let newCount = countStationToStationMap.get(stationToStationKey) + 1;
    countStationToStationMap.set(stationToStationKey, newCount);
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  // set up key
  let stationToStationKey = startStation + "###" + endStation;

  let currentCount = countStationToStationMap.get(stationToStationKey);
  let currentTotal = totalTimeFromStationToStationMap.get(stationToStationKey);

  return currentTotal / currentCount;
};
