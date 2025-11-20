export const jsonError = (message: string, status = 400, details?: unknown) => {
  return Response.json(
    { error: message, details },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    }
  );
};

export const jsonOK = (data: unknown) =>
  Response.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
