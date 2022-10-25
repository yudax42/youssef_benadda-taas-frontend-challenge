/**
 * extract data from request
 * @param request
 * @returns Promise<any>
 */

async function getData(request: Request): Promise<any> {
  const contentType = request.headers.get("content-type") || "";

  switch (contentType) {
    case "application/json":
      return await request.json();
    case "application/text" || "text/html":
      return request.text();
    case "form":
      const formData = await request.formData();
      const body: Record<string, any> = {};
      for (const entry of Object(formData).entries()) {
        const key = entry[0];
        body[key] = entry[1];
      }
      return body;
    default:
      return null;
  }
}

export default getData;
