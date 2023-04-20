(function (window) {
  window.__env = window.__env || {};

  // Environment variables
  window.__env.authUrl = "${AUTHURL}";
  window.__env.dbUrl = "${DBURL}";
  window.__env.fileUrl = "${FILEURL}";
})(this);
