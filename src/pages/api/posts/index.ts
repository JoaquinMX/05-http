import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  const posts = await getCollection("blog");
  if (slug === null) {
    return new Response(JSON.stringify(posts), {
      headers: {
        "Content-type": "application/json",
      },
      status: 200,
    });
  }
  const post = await getEntry("blog", slug);
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
