const dayjs = require('dayjs');

function combineUsers(...args) {
    let combinedObject = {
        users: []
    };

// This merges all the arrays passed in
for (const userArray of args) {
    combinedObject.users = [...combinedObject.users, ...userArray];
}

// This sets the date to today
combinedObject.merge_date = dayjs().format('M/D/YYYY');

return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};