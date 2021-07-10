import { Injectable } from '@nestjs/common';
import { Route } from './route';

@Injectable()
export class AppService {
  
  getRoutes(): Route[] {
    let routes: Route[] = [
      {
        title: 'Parque Barreirinha',
        startPosition: {
          latitude: -25.352336,
          longitude: -49.231031,
        },
        endPosition: {
          latitude: -25.359968,
          longitude: -49.257057,
        },
      },
      {
        title: 'Parque São Lourenço',
        startPosition: {
          latitude: -25.352336,
          longitude: -49.231031,
        },
        endPosition: {
          latitude: -25.382100,
          longitude: -49.267620,
        },
      },
      {
        title: 'Parque Tanguá',
        startPosition: {
          latitude: -25.382100,
          longitude: -49.267620,
        },
        endPosition: {
          latitude: -25.378479,
          longitude: -49.283844,
        },
      },
    ];
    return routes;
  }
}
