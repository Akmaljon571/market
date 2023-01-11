import postgres from "../../utils/postgres";

const { fetchAll, fetchOne } = postgres

const ALL_LIKE = `
    SELECT * FROM likes;
`

export const ALL_LIKES = `
    SELECT * FROM likes WHERE user_id = $1;
`

export const CREATE_LIKE = `
    INSERT INTO likes(product_id, user_id) values($1, $2)
`

export const DELETE_Like = `
    DELETE FROM likes where like_id = $1;
`

export const allLikes = () => fetchAll(ALL_LIKE)