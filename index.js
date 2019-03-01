// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lcdrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return lcdrivers;
}