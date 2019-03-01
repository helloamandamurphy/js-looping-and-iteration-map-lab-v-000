// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lcdrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return lcdrivers;
}

function nameToAttributes(drivers) {
  const driverobj = drivers.map(function(driver) {
    const first = driver.split(' ')[0]
    const last = driver.split(' ')[1]
  })
}