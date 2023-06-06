import { Client } from "appwrite";

const projectEndPoint = "https://cloud.appwrite.io/v1";
const projectId = "646d0604df6385bc7d16";

export const appwriteClient = new Client()
  .setEndpoint(projectEndPoint)
  .setProject(projectId);
