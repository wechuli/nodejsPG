if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb://vidjot:nairobi12345678@ds028559.mlab.com:28559/local_library"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/vidjot-dev"
  };
}
