module.exports = [
    {
        method: 'GET',
        path: '/admin',
        handler: function (request, h) {
    
            return request.query;
        }
    },
];