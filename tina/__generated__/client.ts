import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'e08f9398205427d0530dc56e255d25b4c5db8c2d', queries,  });
export default client;
  