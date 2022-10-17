import axios from "axios";

export const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await axios.get("http://localhost:3000/api/articles");
        // console.log("post", posts)
        return posts.data.map(({ id, title, description, image }) => ({
          id,
          title,
          description,
          image
        }));
      } catch (error) {
        throw error;
      }
    },
    getPost: async (_, args) => {
      try {
        const post = await axios.get(
          `http://localhost:3000/api/articles/title/1`
        );
        return {
          id: post.data[0].id,
          title: post.data[0].title,
          description: post.data[0].description,
          image: post.data[0].image
        };
      } catch (error) {
        throw error;
      }
    }
  }
};