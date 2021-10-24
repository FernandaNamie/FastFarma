
export default function AuthenticationService() {
    function executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    function createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
}
  