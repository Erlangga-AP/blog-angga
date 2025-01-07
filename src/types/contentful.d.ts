export interface ContentfulPost {
  fields: {
    featuredImage: { fields: { file: { url: string } } };
    title: string;
    category: { fields: { name: string; slug: string } };
  };
}
