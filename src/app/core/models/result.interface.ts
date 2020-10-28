import {MetaInterface, Track} from './track.interface';

export interface ResultInterface {
  '@attr': MetaInterface,
  'opensearch:Query': {
    '#text': string
    role: string
    startPage: string
  },
  'opensearch:itemsPerPage': string
  'opensearch:startIndex': string
  'opensearch:totalResults': string
  trackmatches: {
    track: Track[]
  }
}
