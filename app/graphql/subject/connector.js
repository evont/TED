// const DataLoader = require('dataloader');
const mockData = [
  {
    id: 1,
    name: 'evont',
    items: ["11", "22", "33"]
  },
  {
    id: 2,
    name: 'evont22',
    items: ["121", "22", "33"]
  },
  {
    id: 3,
    name: 'evont33',
    items: ["131", "22", "33"]
  },
  {
    id: 4,
    name: 'evont44',
    items: ["131", "22", "33"]
  }
];
class SubjectConnector {
  constructor(ctx) {
    this.ctx = ctx;
    // this.loader = new DataLoader(this.fetch.bind(this));
  }

  async fetch(ids) {
    const subjects = await Promise.resolve(mockData.filter(item => item.id === ids || (Object.prototype.toString.call(ids) === '[object Array]' && !!~ids.indexOf(id))));
    return subjects;
  }

  fetchByIds(ids) {
    return this.fetch(ids);
  }

  fetchById(id) {
    return this.fetch(id);
  }
}

module.exports = SubjectConnector;