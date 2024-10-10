const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'admin_web_portal',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

