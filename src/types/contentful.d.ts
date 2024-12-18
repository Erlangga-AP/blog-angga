export interface ContentfulPost {
  fields: {
    featuredImage: { fields: { file: { url: string } } };
    title: string;
  };
}
