import { schema } from "../../../graphql/schema";
import { createYoga } from "graphql-yoga";
import { context } from "../../../graphql/context";
import type { NextApiRequest, NextApiResponse } from "next";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  context,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
});
