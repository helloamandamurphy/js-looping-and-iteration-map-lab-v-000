// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lcdrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return lcdrivers;
}

function nameToAttributes(drivers) {
  const driverobj = drivers.map(function(driver) {
    const first = driver.split(' ')[0];
    const last = driver.split(' ')[1];
    
    return {firstName: first, lastName: last}; 
  });
  return driverobj;
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return "#{driver.name} is from #{driver.hometown};"
  }
  )
}