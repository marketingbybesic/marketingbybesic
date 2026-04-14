export { renderers } from '../../renderers.mjs';

const SENDFOX_ENDPOINT = "https://api.sendfox.com/contacts";
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, first_name } = body;
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const response = await fetch(SENDFOX_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${"your_token_here"}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        first_name: first_name || ""
      })
    });
    if (!response.ok) {
      throw new Error(`SendFox API error: ${response.statusText}`);
    }
    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Subscribe API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
