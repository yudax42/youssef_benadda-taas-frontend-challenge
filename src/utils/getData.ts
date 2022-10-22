/**
 * extract data from request
 * @param request
 * @returns Promise<any>
 */
async function getData(request: Request): Promise<any> {
  const { headers } = request;
  const contentType = headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return await request.json();
  } else if (contentType.includes("application/text")) {
    return request.text();
  } else if (contentType.includes("text/html")) {
    return request.text();
  } else if (contentType.includes("form")) {
    const formData = await request.formData();
    const body: Record<string, any> = {};
    for (const entry of Object(formData).entries()) {
      const key = entry[0];
      body[key] = entry[1];
    }
    return body;
  }
  return null;
}

export default getData;
