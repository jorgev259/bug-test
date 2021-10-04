export const getImageUrl = (id, type = 'album') => process.env.NODE_ENV === 'development' ? `/img/${type}/default.png` : `/${type}/${id}.png`
