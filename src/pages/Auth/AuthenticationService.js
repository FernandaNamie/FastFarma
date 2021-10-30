import axios from 'axios';

const API_URL = 'http://localhost:8080';

export default function AuthenticationService() {

    function createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    function executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: createBasicAuthToken(username, password) } })
    }

    AuthenticationService.createBasicAuthToken = createBasicAuthToken
    AuthenticationService.executeBasicAuthenticationService = executeBasicAuthenticationService
}
  