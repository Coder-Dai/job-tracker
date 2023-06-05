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

export async function addJob(e, userId) {
  e.preventDefault();
  console.log(e);
  await databases.createDocument(database, collection, ID.unique(), {
    userId: "testing-123",
    position: e.target[0].value,
    company: e.target[1].value,
    salary: e.target[2].value,
    location: e.target[3].value,
    followUp: e.target[4].value,
    deadline: e.target[5].value,
  });
}

export async function updateJobAsync(userId, jobId, job) {
  // TODO: Update job in db
}

export async function deleteJobAsync(jobId) {
  await databases.deleteDocument(databaseId, collectionId, jobId);
}
