import postgres from "../../utils/postgres";

const { fetchAll, fetchOne } = postgres

const ALL_LIKE = `
    SELECT * FROM likes;
`

export const allLikes = () => fetchAll(ALL_LIKE)