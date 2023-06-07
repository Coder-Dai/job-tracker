import { Databases, Query } from "appwrite";
import { appwriteClient } from "../appwriteClient/client";

/*
  This file contains functions that allow you to talk to the database.
  They allow you to perform CRUD operations.
*/

const databases = new Databases(appwriteClient);

const databaseId = "testing-testing";
const collectionId = "jobs";

export async function getJobsAsync(userId) {
  const docs = await databases.listDocuments(databaseId, collectionId, [
    Query.equal("userId", userId),
  ]);

  return docs.documents;
}

export async function addJobAsync(job) {
  await databases.createDocument(databaseId, collectionId, job.$id, {
    userId: job.userId,
    position: job.position,
    company: job.company,
    salary: job.salary,
    location: job.location,
    followUp: job.followUp,
    deadline: job.deadline,
    status: job.status,
    excitement: job.excitement,
  });
}

export async function updateJobAsync(userId, jobId, job) {
  // TODO: Update job in db
}

export async function deleteJobAsync(jobId) {
  await databases.deleteDocument(databaseId, collectionId, jobId);
}
