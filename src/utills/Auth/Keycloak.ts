export interface Operations {
    login: () => Promise<void>;
    register: () => Promise<void>;
    logout: () => Promise<void>;
}

import Keycloak from "keycloak-js";
const keycloak = new Keycloak({ url: import.meta.env.VITE_KEYCLOCK_URL, realm: import.meta.env.VITE_KEYCLOCK_REALM, clientId: import.meta.env.VITE_KEYCLOCK_CLIENT, });
export default keycloak;