const QUERY_GET = `
 select * from category
`;

const QUERY_POST = `
 INSERT INTO category(category_title) VALUES ($1) RETURNING *
`;

const QUERY_PUT = `
 UPDATE category SET category_title = $1 WHERE category_id = $2 RETURNING *
`;

const QUERY_DELETE = `
 DELETE FROM category WHERE category_id = $1 RETURNING *
`;


export {QUERY_GET, QUERY_POST, QUERY_PUT, QUERY_DELETE}





