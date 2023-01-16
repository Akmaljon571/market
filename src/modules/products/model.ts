import postgres from '../../utils/postgres';

const ALL_PRODUCTS = `
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

const NEW_PRODUCT = `
    insert into product(product_title, product_price, product_color, product_img, category_id) values($1, $2, $3, $4, $5)
`;

interface products {
	title: String;
	price: String;
	color: String;
	img: String;
	category_id: String;
}

export const allProducts = () => postgres.fetchAll(ALL_PRODUCTS);

export const createProduct = (
	title: any,
	price: any,
	color: any,
	img: any,
	category_id: any,
): any => postgres.fetchAll(NEW_PRODUCT, title, price, color, img, category_id);
