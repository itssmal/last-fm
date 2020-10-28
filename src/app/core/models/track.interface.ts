export interface TrackResponse {
  tracks: {
    '@attr': MetaInterface,
    track: Track[]
  }
}

export interface MetaInterface {
  page: string
  perPage: string
  total: string
  totalPages: string
}

export interface ImageInterface {
  size: string,
  '#text': string
}

export interface Track {
  artist: {
    name: string,
    mbid: string,
    url: string
  }
  duration: string,
  image: ImageInterface[],
  listeners: string
  mbid: string
  name: string
  playcount: string
  streamable: {
    fulltrack: string,
    '#text': string
  }
  url: string
}
