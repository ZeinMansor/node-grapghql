const File = require("../models/Files");

const resolvers = {
  getFile: async ({ id }) => {
    try {
      const file = await File.findById(id);
      return file;
    } catch (err) {
      throw new Error("Error retrieving file");
    }
  },
  getFiles: async () => {
    try {
      const files = await File.find();
      return files;
    } catch (err) {
      throw new Error("Error retrieving files");
    }
  },
  createFile: async ({ title, isRead }) => {
    try {
      const file = new File({ title, isRead });
      await file.save();
      return file;
    } catch (err) {
      throw new Error("Error creating file");
    }
  },
  updateFile: async ({ id, title, isRead }) => {
    console.log(isRead)
    try {
      const file = await File.findByIdAndUpdate(
        id,
        { title, title, isRead: isRead },
        { returnOriginal: false }
      );
      return file;
    } catch (err) {
      throw new Error("Error updating file");
    }
  }
};

module.exports = resolvers;
