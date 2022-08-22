import React, { useState } from "react";
import "../home/Styles/products.css";
import styled from "styled-components";

//image
import cake from "../../image/torta_card.jpg";
import sugarFreeCake from "../../image/torta_sin_azucar_card.jpg";
import litle_cake from "../../image/litle_cake_card.jpg";
import chocolate from "../../image/chocolate_card.jpg";
import calugas from "../../image/calugas_card.jpg";
import tarta from "../../image/tarta_card.jpg";
import tartaSa from "../../image/tarta_sa_card.jpg";
import coctel from "../../image/coctel_card.jpg";

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
    <div className="contentProducts">
      <h2 id="title">Products</h2>
      <div className="contentGrandFather">
        {/* one vertical*/}
        <div>
          <div className="fatherContent">
            <ImageCard
              className="imageContentOne"
              src={cake}
              alt="x"
              onMouseEnter={() => setInHover1(true)}
              onMouseLeave={() => setInHover1(false)}
            />
            {inHover1 != false ? <p className="textHoverCard1">Tortas</p> : ""}
          </div>
          <div className="fatherContent">
            <ImageCard
              className="imageContentOne"
              src={sugarFreeCake}
              alt="x"
              onMouseEnter={() => setInHover2(true)}
              onMouseLeave={() => setInHover2(false)}
            />
            {inHover2 != false ? (
              <p className="textHoverCard1">Tortas sin azucar</p>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* two vertical*/}
        <div>
          <div className="fatherContent">
            <ImageCard
              className="imageContentTwo"
              src={litle_cake}
              alt="x"
              onMouseEnter={() => setInHover3(true)}
              onMouseLeave={() => setInHover3(false)}
            />
            {inHover3 != false ? (
              <p className="textHoverCard2">Pastelitos</p>
            ) : (
              ""
            )}
          </div>
          <div className="fatherContent">
            <ImageCard
              className="imageContentTwo"
              src={chocolate}
              alt="x"
              onMouseEnter={() => setInHover4(true)}
              onMouseLeave={() => setInHover4(false)}
            />
            {inHover4 != false ? (
              <p className="textHoverCard2">Chocolates</p>
            ) : (
              ""
            )}
          </div>
          <div className="fatherContent">
            <ImageCard
              className="imageContentTwo"
              src={calugas}
              alt="x"
              onMouseEnter={() => setInHover5(true)}
              onMouseLeave={() => setInHover5(false)}
            />
            {inHover5 != false ? (
              <p className="textHoverCard2">Dulces & galletas</p>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* three vertical*/}
        <div>
          <div className="contentHorizonatal">
            {/* horizontal */}
            <div className="fatherContent">
              <ImageCard
                className="imageContentThreeHorizonatal1"
                src={tarta}
                alt="x"
                onMouseEnter={() => setInHover6(true)}
                onMouseLeave={() => setInHover6(false)}
              />
              {inHover6 != false ? (
                <p className="textHoverCard3">Tartas</p>
              ) : (
                ""
              )}
            </div>
            <div className="fatherContent">
              <ImageCard
                className="imageContentThreeHorizonatal2"
                src={tartaSa}
                alt="x"
                onMouseEnter={() => setInHover7(true)}
                onMouseLeave={() => setInHover7(false)}
              />
              {inHover7 != false ? (
                <p className="textHoverCard3right">Tartas sin azucar</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="fatherContent">
            <ImageCard
              className="imageContentThree"
              src={coctel}
              alt="x"
              onMouseEnter={() => setInHover8(true)}
              onMouseLeave={() => setInHover8(false)}
            />
            {inHover8 != false ? (
              <p className="textHoverCard3coctel">Tartas sin azucar</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//styled component
const ImageCard = styled.img`
  color: red;
`;

export default Products;
