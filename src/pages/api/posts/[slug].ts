import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  const post = await getEntry("blog", slug as any);
  if (post) {
    return new Response(JSON.stringify(post), {
      headers: {
        "Content-type": "application/json",
      },
      status: 200,
    });
  }
  return new Response("Not Found", {
    headers: {
      "Content-type": "application/json",
    },
    status: 404,
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      method: "POST",
      ...body,
    }),
    {
      status: 200,
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      method: "PUT",
      ...body,
    }),
    {
      status: 200,
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      method: "PATCH",
      ...body,
    }),
    {
      status: 200,
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const { slug } = params;
  return new Response(
    JSON.stringify({
      method: "DELETE",
      slug: slug,
    }),
    {
      status: 200,
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

// export const getStaticPaths = async () => {
//   return [
//     {
//       params: { slug: "first-post" },
//     },
//   ];
// };`
