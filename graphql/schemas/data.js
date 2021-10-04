module.exports = `
type Album {
    id: ID!
    title: String!
    subTitle: String
    releaseDate: String!
    label: String
    vgmdb: String
    description: String
    stores: [Store]!
    discs: [Disc]!
    downloads: [Download]!
    artists: [Artist]!
    classes: [Class]!
    categories: [Category]!
    platforms: [Platform]!
    games: [Game]!
    animations: [Animation]!
    related: [Album]!
    updatedAt: Float!
    createdAt: Float!
    status: String!
}

type Disc {
    id: ID!
    number: Int
    body: String
    album: Album
}

    input DiscInput {
    number: Int
    body: String
}

    input DownloadInput {
    title: String
    small: Boolean
    links: [LinkInput]
}

    input LinkInput {
    provider: String
    custom: String
    url: String
    directUrl: String
}

type Download {
    id: ID!
    title: String
    small: Boolean
    links: [Link]
}

type Store {
    id: ID!
    provider: String
    url: String
}

type Link {
    id: ID!
    provider: String
    custom: String
    url: String
    directUrl: String
}

type Artist {
    name: String!
    slug: String!
    albums: [Album]
}

type Class {
    name: String!
    albums: [Album]!
}

type Game {
    slug: String!
    name: String
    releaseDate: String
    publishers: [Publisher]
    platforms: [Platform]
    albums: [Album]
    series: [Series]
}

type Animation {
    id: ID!
    title: String
    subTitle: String
    releaseDate: String
    studios: [Studio]!
    albums: [Album]!
}

type Studio {
    slug: String!
    name: String
    animations: [Animation]!
}

type Platform {
    id: ID!
    name: String
    type: String!
    albums: [Album]
    games: [Game]!
}

type Publisher {
    id:ID!
    name: String
    games: [Game]
}

type Series {
    slug: String!
    name: String
    games: [Game]
}

type Category {
    name: String!
    albums: [Album]!
}

type Query {
    Album(id: ID!): Album
}

type Mutation {
    test: Int
}
`
