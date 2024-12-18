import * as contentful from "contentful";

// Gateway to client data
const client = contentful.createClient({
  space: "q6rx6pxhzrxs",
  environment: "master", // defaults to 'master' if not set
  accessToken: "XgLdaK_hAQ6svWsk5jqLKIzD-ice85UtESoWffZbVQg",
});

// Get hero section entries/data/records
export async function getHeroSection() {
  try {
    const data = await client.getEntries({
      content_type: "heroSection",
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Get both blog post and hero section entries
export async function getAllEntries() {
  try {
    const data = await client.getEntries();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

//Get entries for blog post only
export async function getAllBlogPost() {
  try {
    const data = await client.getEntries({
      content_type: "title",
    });

    return data.items.map((post) => {
      let thumbnailUrl = post?.fields?.thumbnailImage?.fields?.file.url;

      if (!thumbnailUrl) {
        thumbnailUrl =
          "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
      }
      return {
        title: post.fields.title,
        slug: post.fields.slug,
        content: post.fields.content,
        thumbnailImage: `https:${thumbnailUrl}`,
        categories: post.fields.categories,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllHeroSection() {
  try {
    const data = await client.getEntries({
      content_type: "heroSection",
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getSingleBlogPost() {
  try {
    const data = await client.getEntries({
      content_type: "title",
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

//Some spesific posts by title
export async function getPostsByTitle() {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.title[match]": keyword,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

//Some spesific posts by category
export async function getPostsByCategory() {}
