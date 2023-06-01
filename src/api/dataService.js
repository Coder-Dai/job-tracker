import { Client, Databases, ID, Query } from "appwrite";

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

export async function addJobAsync(userId, job) {
  await databases.createDocument(database, collection, ID.unique(), {
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

export async function deleteJobAsync(userId, jobId) {
  // TODO: Delete job in db
}
