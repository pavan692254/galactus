module.exports = [
    {
        method: 'get',
        path: '/admin',
        handler: function (request) {
    
            return request.query;
        }
    },
];