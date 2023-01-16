

const QUERY_GET_AKSIA = `
select * from aksia;
`;

const QUERY_POST_AKSIA = `
INSERT INTO aksia(product_id, foiz) VALUES ($1, $2) RETURNING *
`;

const QUERY_PUT_AKSIA = `
UPDATE aksia set foiz= $2 where  aksia_id = $1  RETURNING *
`;

const QUERY_DELETE_AKSIA = `
DELETE FROM aksia WHERE aksia_id = $1 RETURNING *
`;

export {
    QUERY_GET_AKSIA,QUERY_POST_AKSIA, QUERY_PUT_AKSIA, QUERY_DELETE_AKSIA
}




