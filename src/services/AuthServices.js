import apiFuncionario from '../utils/apiFuncionario'


class AuthServices {
    signIn = (email, password) => {

        return (new Promise((resolve, reject) => {
            apiFuncionario.post('/auth/login', { email, password })
            .then(response => {
                    if (response.data) {
                        resolve(response.data)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        }))
    }

}

const authServices = new AuthServices();

export default authServices;