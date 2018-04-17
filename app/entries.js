'use strict';

exports.findByUsername = function(event, context, callback) {
    
    const username = event.pathParameters.username;
    
    const entries = [
        {
         username: username,
         entryId: 1,
         curriculum: 'Cloud Native',
         type: 'Draft Initial Version(Research)',
         date: '3/1/2018',
         hours: 5
        },
        {
         username: username,
         entryId: 2,
         curriculum: 'Cloud Native',
         type: 'Draft Initial Version(Research)',
         date: '3/2/2018',
         hours: 4
        }
    ]
    
    const result = {
        statusCode: 200,
        body: JSON.stringify(entries),
        headers: {'content-type': 'text/html'}
    };
    
    callback(null, result);
};
