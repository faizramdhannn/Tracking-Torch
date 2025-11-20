import { detectCourier } from "@/lib/couriers/detectCourier";
import { CourierConfig } from "@/config/couriers";
import { jsonError } from "@/config/response/response";

// Handlers
import { fetchLion } from "@/lib/couriers/lion";
import { fetchSicepat } from "@/lib/couriers/sicepat";

export async function GET(
  _req: Request,
  context: { params: Promise<{ sttNumber: string }> }
) {
  try {
    const { sttNumber } = await context.params;

    if (!sttNumber) {
      return jsonError("Tracking number is required", 400);
    }

    const { LION_API, SICEPAT_API } = CourierConfig;

    if (!LION_API || !SICEPAT_API) {
      return jsonError("Server configuration incomplete.", 500);
    }

    const courier = detectCourier(sttNumber);

    if (courier === "unknown") {
      return jsonError("Unknown courier or invalid tracking number.", 400);
    }

    if (courier === "lion") return fetchLion(sttNumber);
    if (courier === "sicepat") return fetchSicepat(sttNumber);

    return jsonError("Courier handler not implemented.", 500);
  } catch (error: any) {
    if (error.response) {
      return jsonError(
        `API error: ${error.response.status}`,
        error.response.status,
        error.response.data
      );
    }

    if (error.request) {
      return jsonError("Unable to reach the API server.", 503);
    }

    return jsonError("Unexpected server error.", 500, error?.message);
  }
}
