import { Client, Databases, ID, Query } from "appwrite";

const projectEndPoint = "https://cloud.appwrite.io/v1";
const projectId = "646d0604df6385bc7d16";
const databaseId = "testing-testing";
const collectionId = "jobs";

const client = new Client().setEndpoint(projectEndPoint).setProject(projectId);

const databases = new Databases(client);

export async function getJobsAsync(userId) {
  const docs = await databases.listDocuments(databaseId, collectionId, [
    Query.equal("userId", userId),
  ]);

  return docs.documents;
}

export async function addJobAsync(userId, job) {
  await databases.createDocument(databaseId, collectionId, ID.unique(), {
    userId: userId,
    position: "Software Developer",
    company: "Fake Company",
    salary: 100000,
    location: "London",
    followUp: new Date("2024-01-01").toISOString(),
    deadline: new Date("2024-01-01").toISOString(),
  });
}

export async function updateJobAsync(userId, jobId, job) {
  // TODO: Update job in db
}

export async function deleteJobAsync(jobId) {
  // TODO: Delete job in db
  await databases.deleteDocument(databaseId, collectionId, jobId);
}
