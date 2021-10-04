module.exports = `
type SearchAlbumResult {
    rows: [Album]
    count: Int
}

type SearchAnimResult {
    rows: [Animation]
    count: Int
}

type SearchStudioResult {
    rows: [Studio]
    count: Int
}

type SearchGameResult {
    rows: [Game]
    count: Int
}

type SearchSeriesResult {
    rows: [Series]
    count: Int
}

type Query {
    searchAlbum(title: String, classes:[String], limit: Int, page: Int, order: [String], mode: String, status: [String!]): SearchAlbumResult
    searchAlbumByArtist(name: String!, classes:[String], limit: Int, page: Int, order: [String], mode: String, status: [String!]): SearchAlbumResult
    searchAnimation(title: String, limit: Int, page: Int, order:String, mode: String): SearchAnimResult
    searchStudio(name: String, limit: Int, page: Int, order:String, mode: String): SearchStudioResult
    searchGame(name: String, limit: Int, page: Int, order:String, mode: String): SearchGameResult
    searchSeries(name: String, limit: Int, page: Int, order:String, mode: String): SearchSeriesResult
}
`
