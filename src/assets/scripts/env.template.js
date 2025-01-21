(function (window) {
  window.env = window.env || {};

  window.env.keycloak = {
    url: '${KEYCLOAK_URL}',
    realm: '${KEYCLOAK_REALM}',
    clientId: '${KEYCLOAK_CLIENT_ID}',
  };
})(this);
