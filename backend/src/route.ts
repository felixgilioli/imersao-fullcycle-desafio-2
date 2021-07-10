export interface Route {
    title: string;  
    startPosition: Position;
    endPosition: Position;
  }

  interface Position {
    latitude: number;
    longitude: number;
  }