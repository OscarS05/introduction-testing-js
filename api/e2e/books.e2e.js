const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config/index');
// const { generateManyBooks } = require('../src/fakes/book.fake');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('Test for GET /api/v1/books', () => {
    test('should return books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'oscar',
        },
        {
          name: 'Book2',
          year: 1998,
          author: 'oscar',
        },
      ]);
      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
