import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const person = {
    name: "Joaquin Beltran",
    age: 38,
  };
  return new Response(JSON.stringify(person), {
    headers: {
      "Content-type": "application/json",
    },
    status: 200,
  });
};
