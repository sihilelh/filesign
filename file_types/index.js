const media_filetypes = require("./media");
const doc_filetypes = require("./docs");

const types = { ...media_filetypes, ...doc_filetypes };

module.exports = types;
