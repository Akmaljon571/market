import postgres from '../../utils/postgres';

export const ALL_PRODUCTS = `
    SELECT 
        p.product_id,
        c.category_title,    
        p.product_title,
        p.product_price,
        p.product_color,
        p.product_img
    FROM 
        category c
    JOIN
        product p
    ON
        c.category_id = p.category_id
`;

export const allProducts = () => postgres.fetchAll(ALL_PRODUCTS);
