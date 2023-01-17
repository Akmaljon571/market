export const db_dastavkaGet = `
    SELECT 
        k.id,
        p.product_title,
        p.product_price
    FROM 
        karzinka k
    JOIN
        product p
    ON
        p.product_id = k.product_id and k.user_id = $1
`

export const db_dastavkaPost = `
    INSERT INTO dastavka(city, street, distreet, home, product_id, number, user_id) values($1, $2, $3, $4, $5, $6, $7)
`

export const db_user_id = `
    SELECT * from users where user_mail = $1
`