const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new')

    .add('/campaigns/:address/requests/:id', '/campaigns/requests/show')
    .add('/campaigns/:address/requests/:id/approve', '/campaigns/requests/approve')
    .add('/campaigns/:address/requests/:id/finalize', '/campaigns/requests/finalize')
    .add('/campaigns/:address/requests/:id/reject', '/campaigns/requests/reject');

module.exports = routes