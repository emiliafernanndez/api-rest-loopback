import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongodbDataSource} from '../datasources';
import {Articulo, ArticuloRelations} from '../models';

export class ArticuloRepository extends DefaultCrudRepository<
  Articulo,
  typeof Articulo.prototype.ID,
  ArticuloRelations
> {
  constructor(
    @inject('datasources.DatasourceMongodb') dataSource: DatasourceMongodbDataSource,
  ) {
    super(Articulo, dataSource);
  }
}
