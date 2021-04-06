import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {

    const { email, password } = JSON.parse(config.data);

    if (email !== 'lineker.aguiar98@gmail.com' || password !== 'oixuxu'){
        return [400, {messagee: "E-mail ou Senha incorretos"}]
    }

    const user = {
        id: 1,
        name: 'Lineker',
        username: 'Etiqueta',
        email: 'lineker.aguiar98@gmail.com'
    }

    return [200, { user }]
});