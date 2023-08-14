var defaultTarget = 'https://api.atlar.com/v1/accounts';
module.exports = [
    {
    context: ['/v1/accounts'],
    target: defaultTarget,
    changeOrigin: true,
    }
];