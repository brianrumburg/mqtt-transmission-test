var ProtoBuf = require('protobufjs');
var builder = ProtoBuf.loadProtoFile('kurapayload.proto');
var KuraPayload = builder.build("kuradatatypes").KuraPayload;

module.exports.decode = function(buf) {
  return KuraPayload.decode(buf);
};
