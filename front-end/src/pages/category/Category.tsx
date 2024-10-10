import ProductList from "../../shared-components/products-list/ProductsList";
import MainLayout from "../../layouts/main-layout/MainLayout";

export default function Category() {
  return (
    <MainLayout>
      <h1 className="text-center text-5xl font-semibold mt-12">Category name</h1>
      <ProductList />
    </MainLayout>
  );
}