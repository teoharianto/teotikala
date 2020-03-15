
import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "http://103.56.149.4:1337/graphql", // Server URL (must be absolute)
  })
};
export default withData(config);