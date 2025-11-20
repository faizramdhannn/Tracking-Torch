/**
 * Detect whether a journey type represents a return process.
 *
 * Lion Parcel rules:
 * - Any journey_type containing "return", "returnhq", or "cancel" is RETURN.
 * - Undetermined cases like "reroute-return" must still be RETURN.
 * - Empty string "" = forward journey (NOT return).
 */
export function isReturnJourney(journeyType?: string | null): boolean {
  if (!journeyType) return false;

  const t = journeyType.toLowerCase();

  return (
    t.includes("return") ||
    t.includes("returnhq") ||
    t.includes("cancel")
  );
}
