import axios from "axios";
import { CourierConfig } from "@/config/couriers";
import { axiosConfig } from "@/config/axios/axios";
import { jsonError, jsonOK } from "@/config/response/response";

export async function fetchLion(sttNumber: string) {
  const { LION_API, LION_AUTH } = CourierConfig;

  const { data, status } = await axios.get(`${LION_API}?q=${sttNumber}`, {
    ...axiosConfig,
    headers: {
      Authorization: LION_AUTH,
      "Content-Type": "application/json",
    },
  });

  if (status !== 200) {
    return jsonError(`Lion Parcel API error: ${status}`, status);
  }

  return jsonOK({ ...data, courier: "lion" });
}
