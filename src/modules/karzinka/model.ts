import postgres from "../../utils/postgres"; 
const {fetchAll, fetchOne} = postgres

const ALL_LIKES = `
    SELECT * FROM likes WHERE user_id = $1;
`

export const getLikes = (userId: string) => fetchAll(ALL_LIKES, userId)