const { MongoClient } = require("mongodb");

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://fgsouza93:cBvYOYhAnQW2rPhH@cluster0.qglr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected with MongoDB!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
