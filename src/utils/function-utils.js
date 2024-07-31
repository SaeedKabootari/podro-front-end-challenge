function forceOnlyNumberInput(event) {
  let updatedValue = event.target.value;
  if (Number.isNaN(+updatedValue) === true) {
    updatedValue = updatedValue.slice(0, -1);
    return (event.target.value = updatedValue);
  }
}

function validateIp(IP) {
  let ipv4 =
    /(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/;
  let ipv6 = /((([0-9a-fA-F]){1,4})\:){7}([0-9a-fA-F]){1,4}/;
  if (IP.match(ipv4)) return "Valid IPv4";
  else if (IP.match(ipv6)) return "Valid IPv6";
  return "Invalid IP";
}

export { forceOnlyNumberInput, validateIp };
