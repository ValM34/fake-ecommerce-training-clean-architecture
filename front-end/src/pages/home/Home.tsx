import HeroSection from "./HeroSection";
import ProductsList from "../../shared-components/products-list/ProductsList";
import MainLayout from "../../layouts/main-layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ProductsList />
    </MainLayout>
  );
}
