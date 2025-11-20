// handlers/couriers/sicepat.ts

import axios from "axios";
import { CourierConfig } from "@/config/couriers";
import { axiosConfig } from "@/config/axios/axios";
import { jsonError, jsonOK } from "@/config/response/response";

export async function fetchSicepat(sttNumber: string) {
  const { SICEPAT_API, SICEPAT_KEY } = CourierConfig;

  if (!SICEPAT_KEY) {
    return jsonError("Sicepat API key is not configured.", 500);
  }

  const { data, status } = await axios.get(
    `${SICEPAT_API}?waybill=${encodeURIComponent(sttNumber)}`,
    {
      ...axiosConfig,
      headers: {
        "api-key": SICEPAT_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  const code = data?.sicepat?.status?.code;
  const desc = data?.sicepat?.status?.description;

  if (code !== 200) {
    let msg = desc || "Unknown SiCepat error";

    if (desc === "Can't get waybill from database") {
      msg = "Tracking number not found. Please check the STT number.";
    }

    if (desc?.includes("Invalid")) {
      msg = "Invalid API key. Contact admin.";
    }

    return jsonError(msg, 400, desc);
  }

  if (status !== 200) {
    return jsonError(`Sicepat API HTTP error: ${status}`, status);
  }

  return jsonOK({ ...data, courier: "sicepat" });
}
