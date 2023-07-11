import axiosInstance from "./axiosinstance";


async function getAllVideo() {
  const response = await axiosInstance.get("/conteudo/getVideo");
  return response.data;
}
async function getAllAudio() {
  const response = await axiosInstance.get("/conteudo/getAudio");
  return response.data;
}
async function getContent(id) {
  const response = await axiosInstance.get("/conteudo/" + id);
  return response.data;
}
async function uploadFiles(files) {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));
  const response = await axiosInstance.post("/file", formData);
  return response.data;
}

async function getFile(name) {
  const response = await axiosInstance.get("/file/" + name);
  return response.data;
}

async function createContent(data) {
  await axiosInstance.post("/conteudo", data);
}

async function createUser(data) {
  const response = await axiosInstance.post("/user", data);
  return response.data;
}

async function gettAllCommets() {
  const response = await axiosInstance.get("/comment");
  return response;
}

async function createComment(data) {
  const response = await axiosInstance.post("/comment", data);
  return response.data;
}
async function deleteComment(id) {
  const response = await axiosInstance.delete("/comment", +id);
  return response;
}

async function gettAllLikes() {
  const response = await axiosInstance.get("/like");
  return response;
}
async function deleteLike(id) {
  const response = await axiosInstance.delete("/like", +id);
  return response;
}

async function createLike(data) {
  const response = await axiosInstance.post("/like", data);
  return response.data;
}
async function gettAllUsers() {
  const response = await axiosInstance.get("/user/");
  return response;
}

export default {
  
  getAllAudio,
  getAllVideo,
  uploadFiles,
  createContent,
  createUser,
  createComment,
  gettAllCommets,
  createLike,
  gettAllLikes,
  getContent,
  deleteLike,
  deleteComment,
  getFile,
  gettAllUsers,
};


