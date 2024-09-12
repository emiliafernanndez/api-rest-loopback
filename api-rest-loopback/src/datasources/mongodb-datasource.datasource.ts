import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DatasourceMongodb',
  connector: 'mongodb',
  url: 'mongodb+srv://dbSD:123@mongoapirest.qa0jc.mongodb.net/?retryWrites=true&w=majority&appName=MongoAPIRest',
 // host: 'mongoapirest.qa0jc.mongodb.net/?retryWrites=true&w=majority&appName=MongoAPIRest',
 // port: 8080,
 // user: 'dbSD',
 // password: '123',
  database: 'MongoAPIRest',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DatasourceMongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DatasourceMongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DatasourceMongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
