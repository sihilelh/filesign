const media_filetypes = {
  //PNG
  "89504E470D0A1A0A": {
    used_for: "Image",
    file_type: "PNG",
    extension: "png",
  },
  //MP3
  494433: {
    used_for: "Audio",
    file_type: "MPEG-1 Audio Layer 3",
    extension: "mp3",
  },
  //MP4 MPEG-4
  "667479704D534E56": {
    byte_offset: 4,
    used_for: "Video",
    file_type: "MPEG-4 Video File",
    extension: "mp4",
  },
  //MP4 ISO Base Media
  "6674797069736F6D": {
    byte_offset: 4,
    used_for: "Video",
    file_type: "ISO Base Media File (MPEG-4) v1",
    extension: "mp4",
  },
  //MP4
  "667479706D703432": {
    byte_offset: 4,
    used_for: "Video",
    file_type: "MPEG-4 | QuickTime File",
    extension: "mp4",
  },
  "6674797071742020": {
    byte_offset: 4,
    used_for: "Video",
    file_type: "QuickTime File",
    extension: "mov",
  },
  
};

module.exports = media_filetypes;
