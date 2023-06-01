import { Client, Databases, Query } from "appwrite";

const project = "646d0604df6385bc7d16";
const database = "testing-testing";
const collection = "jobs";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(project);

const databases = new Databases(client);

export async function getJobsAsync(userId) {
  const docs = await databases.listDocuments(database, collection, [
    Query.equal("userId", userId),
  ]);

  return docs.documents;
}
