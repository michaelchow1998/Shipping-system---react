import { useState } from "react";

export default async function loadOrderDetails(searchId) {
  try {
    const url = `http://localhost:8080/api/v1/guest/orders/${searchId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
