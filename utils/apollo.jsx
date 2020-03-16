
import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "https://admin.tikala-bistro.com/graphql", // Server URL (must be absolute)
  })
};
export default withData(config);