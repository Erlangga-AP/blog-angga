import * as contentful from "contentful";

interface ContentfulImage {
  fields: { file: { url: string } };
}

export interface Category {
  tile: string;
  slug: string;
  description: string;
  image: string;
  category: { fields: { name: string } };
}

export interface Post {
  fields: {
    blogImage: ContentfulImage;
    title: string;
    slug: string;
    description: string;
    categories: {
      fields: {
        name: string;
      };
    };
  };
}

export interface Item {
  fields: {
    blogImage: ContentfulImage;
    image: ContentfulImage;
    slug: string;
    name: string;
    content: string;
    title: string;
    description: string;
    categories: { fields: { name: string; slug: string; description: string } };
  };
}

// Gateway to client data
const client = contentful.createClient({
  space: "q6rx6pxhzrxs",
  environment: "master", // defaults to 'master' if not set
  accessToken: "XgLdaK_hAQ6svWsk5jqLKIzD-ice85UtESoWffZbVQg",
});

//Get entries for blog post only
export async function getAllBlogPost({
  fieldsFeatured,
}: { fieldsFeatured?: boolean } = {}) {
  try {
    const data = (await client.getEntries({
      content_type: "blog",
      "fields.featured": fieldsFeatured,
    })) as unknown as { items: Item[] };

    return data.items.map((blog) => {
      const blogImageUrl = blog?.fields?.blogImage?.fields?.file.url;

      return {
        blogImage: `https:${blogImageUrl}`,
        title: blog.fields.title,
        slug: blog.fields.slug,
        description: blog.fields.description,
        category: {
          name: blog?.fields?.categories?.fields?.name,
          slug: blog?.fields?.categories?.fields?.slug,
          description: blog?.fields?.categories?.fields?.description,
        },
      };
    });
  } catch (error) {
    console.error(error);
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

export async function getSingleBlogPost(slug: string) {
  try {
    const data = (await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
    })) as unknown as { items: Item[] };
    const blogImageUrl =
      data.items[0].fields?.blogImage?.fields?.file?.url || "";
    return {
      blogImage: `https:${blogImageUrl}`,
      title: data.items[0].fields.title,
      slug: data.items[0].fields.slug,
      content: data.items[0].fields.content,
      categories: data.items[0].fields.categories,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllCategories({
  field_popular,
}: {
  field_popular?: boolean;
} = {}) {
  try {
    const data = (await client.getEntries({
      content_type: "blogCategory",
      "fields.popular": field_popular,
    })) as unknown as { items: Item[] };
    return data.items.map((post) => {
      const imageUrl = post?.fields?.image?.fields.file.url;
      return {
        image: `https:${imageUrl}`,
        title: post.fields.name,
        slug: post.fields.slug,
        description: post.fields.description,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function searchPostByTitle(keyword: string) {
  try {
    const res = await client.getEntries({
      content_type: "blog",
      query: keyword,
    });
    return res.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
