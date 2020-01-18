'use strict';

module.exports = {
  Query: {
    subject(root, { id }, ctx) {
      return ctx.connector.subject.fetchById(id);
    },
  },
};