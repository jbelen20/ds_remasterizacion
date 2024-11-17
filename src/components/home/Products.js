import React, { useState } from "react";

import {
  ContentProducts,
  Title,
  ProductCategories,
  SectionProducts,
  ImageContentOne,
  ImageContentTwo,
  TextHoverCard1,
  TextHoverCard2,
  HorizonatalContent,
  ImageContentThreeHorizonatal1,
  ImageContentThreeHorizonatal12,
  TextHoverCard3,
  TextHoverCard3right,
  ImageContentThree,
  TextHoverCard3coctel
  } 
  from '../../componentsSC/ProductsSC'

//image
import cake from "../../image/torta_card.jpg";
import sugarFreeCake from "../../image/torta_sin_azucar_card.jpg";
import litle_cake from "../../image/litle_cake_card.jpg";
import chocolate from "../../image/chocolate_card.jpg";
import calugas from "../../image/calugas_card.jpg";
import tarta from "../../image/tarta_card.jpg";
import tartaSa from "../../image/tarta_sa_card.jpg";
import coctel from "../../image/coctel_card.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const [inHover1, setInHover1] = useState(false);
  const [inHover2, setInHover2] = useState(false);
  const [inHover3, setInHover3] = useState(false);
  const [inHover4, setInHover4] = useState(false);
  const [inHover5, setInHover5] = useState(false);
  const [inHover6, setInHover6] = useState(false);
  const [inHover7, setInHover7] = useState(false);
  const [inHover8, setInHover8] = useState(false);

  return (
    <ContentProducts>
      <Title>Products</Title>
      <ProductCategories>
        {/* one vertical*/}
        <div>
          <SectionProducts>
            <Link to="allproducts">
              <ImageContentOne
                src={cake}
                alt="x"
                onMouseEnter={() => setInHover1(true)}
                onMouseLeave={() => setInHover1(false)}
              />
              {inHover1 !== false ? (
                <TextHoverCard1>Tortas</TextHoverCard1>
              ) : (
                ""
              )}
            </Link>
          </SectionProducts>
          <SectionProducts>
            <Link to="allproducts">
              <ImageContentOne
                src={sugarFreeCake}
                alt="x"
                onMouseEnter={() => setInHover2(true)}
                onMouseLeave={() => setInHover2(false)}
              />
              {inHover2 !== false ? (
                <TextHoverCard1>Tortas sin azucar</TextHoverCard1>
              ) : (
                ""
              )}
            </Link>
          </SectionProducts>
        </div>
        {/* two vertical*/}
        <div>
          <SectionProducts>
            <Link to="allproducts">
              <ImageContentTwo
                src={litle_cake}
                alt="x"
                onMouseEnter={() => setInHover3(true)}
                onMouseLeave={() => setInHover3(false)}
              />
              {inHover3 !== false ? (
                <TextHoverCard2>Pastelitos</TextHoverCard2>
              ) : (
                ""
              )}
            </Link>
          </SectionProducts>
          <SectionProducts>
            <Link to="allproducts">
              <ImageContentTwo
                src={chocolate}
                alt="x"
                onMouseEnter={() => setInHover4(true)}
                onMouseLeave={() => setInHover4(false)}
              />
              {inHover4 !== false ? (
                <TextHoverCard2>Chocolates</TextHoverCard2>
              ) : (
                ""
              )}
            </Link>
          </SectionProducts>
          <SectionProducts>
            <Link to="allproducts">
              <ImageContentTwo
                src={calugas}
                alt="x"
                onMouseEnter={() => setInHover5(true)}
                onMouseLeave={() => setInHover5(false)}
              />
              {inHover5 !== false ? (
                <TextHoverCard2>Dulces & galletas</TextHoverCard2>
              ) : (
                ""
              )}
            </Link>
          </SectionProducts>
        </div>
        {/* three vertical*/}
        <div>
          <HorizonatalContent>
            {/* horizontal */}
            <SectionProducts>
              <Link to="allproducts">
                <ImageContentThreeHorizonatal1
                  src={tarta}
                  alt="x"
                  onMouseEnter={() => setInHover6(true)}
                  onMouseLeave={() => setInHover6(false)}
                />
                {inHover6 !== false ? (
                  <TextHoverCard3>Tartas</TextHoverCard3>
                ) : (
                  ""
                )}
              </Link>
            </SectionProducts>
            <SectionProducts>
              <Link to="allproducts">
                <ImageContentThreeHorizonatal12
                  src={tartaSa}
                  alt="x"
                  onMouseEnter={() => setInHover7(true)}
                  onMouseLeave={() => setInHover7(false)}
                />
                {inHover7 !== false ? (
                  <TextHoverCard3right>Tartas sin azucar</TextHoverCard3right>
                ) : (
                  ""
                )}
              </Link>
            </SectionProducts>
          </HorizonatalContent>
          <SectionProducts>
            <Link to="allproducts">
              <ImageContentThree
                src={coctel}
                alt="x"
                onMouseEnter={() => setInHover8(true)}
                onMouseLeave={() => setInHover8(false)}
              />
              {inHover8 !== false ? (
                <TextHoverCard3coctel>Tartas sin azucar</TextHoverCard3coctel>
              ) : (
                ""
              )}
            </Link>
          </SectionProducts>
        </div>
      </ProductCategories>
    </ContentProducts>
  );
};

export default Products;
