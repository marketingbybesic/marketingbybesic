import type { APIRoute } from 'astro';

const SENDFOX_ENDPOINT = 'https://api.sendfox.com/contacts';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, first_name } = body;

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Forward to SendFox API
    const response = await fetch(SENDFOX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.SENDFOX_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: first_name || '',
      }),
    });

    if (!response.ok) {
      throw new Error(`SendFox API error: ${response.statusText}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Subscribe API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
