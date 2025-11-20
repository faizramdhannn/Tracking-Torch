export function normalizeTrackingResponse(raw: any) {
  return {
    courier: raw.courier,
    status_code: raw.status_code ?? raw.data?.status_code,
    journey_type: raw.stt_journey_type ?? raw.data?.stt_journey_type,
    is_return: raw.is_return ?? false,
    data: raw.data ?? raw,
  };
}
