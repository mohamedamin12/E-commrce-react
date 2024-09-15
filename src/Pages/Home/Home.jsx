import React from 'react'
import HeaderBanner from '../../components/header-banner/HeaderBanner'
import Category from '../../components/category/Category'
import SpecialOffers from '../../components/special-offers/SpecialOffers'
import Slider from '../../components/slider/Slider'
import Brands from '../../components/brands/Brands'
import HeadingTitle from '../../components/heading-title/HeadingTitle'
import { useEffect } from "react";
import { fetchProducts } from "../../redux/apiCall/productApiCall";
import { useSelector, useDispatch } from "react-redux";


function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);

  return (
    <div>
    <HeaderBanner />
    <Category />
    <SpecialOffers />
    <HeadingTitle title="الجدید من اللابتوبات" />
    <Slider data={laptops} />
    <HeadingTitle title="الجدید من الجوالات" />
    <Slider data={mobiles} />
    <HeadingTitle title="تسوق حسب المارک" />
    <Brands />

    </div>
  )
}

export default Home
