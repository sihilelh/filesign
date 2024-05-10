const { isArrayBuffer } = require("util/types");
const types = require("./file_types/index");

/**
 *
 * @param {Buffer} buffer
 */
function get_filetype_sync(buffer) {
  // Validate buffer
  if (!buffer.buffer && !isArrayBuffer(buffer.buffer)) {
    throw Error("Not a array buffer that passed");
  }
  // First 20 bytes in hex
  const fbx = Buffer.from(buffer.buffer.slice(0, 20))
    .toString("hex")
    .toUpperCase();
  const types_signatures = Object.keys(types);
  const possible_matches = [];
  for (let i = 0; i < types_signatures.length; i++) {
    const typ = types_signatures[i];
    let fbx_tmp = fbx;
    if (types[typ].byte_offset) {
      fbx_tmp = fbx.slice(types[typ].byte_offset * 2);
    }
    if (fbx_tmp.startsWith(typ)) {
      possible_matches.push(types[typ]);
    }
  }
  if (possible_matches.length > 0) {
    return possible_matches[0];
  } else {
    console.warn("Signature not detected.");
  }
}

module.exports = {
  get_filetype_sync,
};
