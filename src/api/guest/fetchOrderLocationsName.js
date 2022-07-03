export default async function fetchOrderLocationsName(idList) {
  const data = {
    pickup_location: idList[0],
    delivery_location: idList[1],
  };

  try {
    const url = `http://localhost:8080/api/v1/guest/locations`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log("json:", json);
    return json;
  } catch (error) {
    console.error(error);
  }
}
