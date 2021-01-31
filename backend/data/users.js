import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
    },
    {
        name: 'Osman Bahtiyar',
        email: 'osmanbahtiyar@example.com',
        password: bcrypt.hashSync('123456'),
    },
    {
        name: 'Semih Senel',
        email: 'semihsenel@example.com',
        password: bcrypt.hashSync('123456'),
    },
];

/**
 * hash the password with bcryptjs
 * every password is 123456
 */

export default users;
