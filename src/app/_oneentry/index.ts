import { defineOneEntry } from 'oneentry';
import { IMenusPages } from 'oneentry/dist/menus/menusInterfaces';
import { IPagesEntity } from 'oneentry/dist/pages/pagesInterfaces';
import { IProductsEntity } from 'oneentry/dist/products/productsInterfaces';

const { Pages, Menus, Products } = defineOneEntry('https://danielbark.oneentry.cloud', { token: process.env['API_KEY'] });

export async function getPages() {
  const pages = await Pages.getPages();
  return pages as IPagesEntity[];
}

export async function getMenus(marker: string): Promise<IMenusPages[]> {
  const menus = await Menus.getMenusByMarker(marker);
  return menus.pages as Array<IMenusPages>;
}

export type Product = IProductsEntity & {
  attributeValues: {
    title: {
      value: string;
    };
    description: {
      value: string;
    };
    color: {
      value: {
        title: string;
        value: string;
      };
    };
    price: {
      value: string;
    };
    image: {
      value: {
        downloadLink: string;
      };
    };
  };
};

export async function getAllProducts() {
  const allProducts = await Products.getProducts();
  const productMap = new Map();
  allProducts.forEach((p) => {
    productMap.set(p.id, p);
  });
  const uniqueProducts = Array.from(productMap.values());
  // @ts-ignore
  return uniqueProducts as Product[];
}

export async function getProductsByPageUrl(url: string): Promise<Product[]> {
  const products = await Products.getProductsPageByUrl(url, 'en_US');
  // @ts-ignore
  return products as Product[];
}

export async function getProductById(id: number): Promise<Product> {
  const products = await Products.getProductById(id, 'en_US');
  // @ts-ignore
  return products as Product[];
}
