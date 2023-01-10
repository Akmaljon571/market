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