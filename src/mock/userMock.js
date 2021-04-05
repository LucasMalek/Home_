import mock from '../utils/mock';

mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username': 'LinekerAguiar',
    'email': 'lineker.aguiar98@gmail.com'
})