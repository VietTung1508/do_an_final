import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import styles from "./SubNav.module.css";
import Search from "../Search/Search.jsx";
import useStateTag from "../../ReuseHook/useStateTag.jsx";
import useStateProduct from "../../ReuseHook/useStateProduct.jsx";

const SubNav = () => {
  const [searchParams, setSearchParams] = useSearchParams("sale");
  const tag = searchParams.get("tag");

  const { pathname } = useLocation();
  const [category, setCategory] = useState([]);
  useStateTag("women", setCategory);
  const [category2, setCategory2] = useState([]);
  useStateTag("men", setCategory2);
  const [p, setP] = useState([]);
  useStateProduct(setP, category2);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [category3, setCategory3] = useState([]);
  useStateTag("unisex", setCategory3);
  const [category4, setCategory4] = useState([]);
  useStateTag("kid", setCategory4);
  return (
    <Box w="100%" bgColor={"#6D9886"} className={styles.nav}>
      <Box className={styles.wrapper}>
        <ul className={styles.navLink}>
          {/*sale*/}
          {/*<li>*/}
          {/*  <Flex*/}
          {/*      transform={"skew(-10deg)"}*/}
          {/*      alignItems={"center"}*/}
          {/*      w="80px"*/}
          {/*      justifyContent={"center"}*/}
          {/*      bgColor={`${tag && tag === "kid" ? "#d01345": ""}`}*/}
          {/*      color={"white"}*/}
          {/*      _hover={{ bgColor: "white", color: "black" }}*/}
          {/*      mr="10px"*/}
          {/*      h="49px"*/}
          {/*  >*/}
          {/*    <Link className={styles.Link} to={"/"}><Text*/}
          {/*        transform={"skew(10deg)"}*/}
          {/*        _hover={{ transform: "skew(0deg)" }}*/}
          {/*    >*/}
          {/*      Sale*/}
          {/*    </Text>*/}
          {/*    </Link>*/}

          {/*  </Flex>*/}
          {/*  <Box className={styles.megaBox}>*/}
          {/*    <Box className={styles.content}>*/}
          {/*      <div className={styles.row}>*/}
          {/*        <header><b>SHOP BY PRODUCTS</b></header>*/}
          {/*        <ul className={styles.megaLinks}>*/}
          {/*          <li><a href="#">SALE View all</a></li>*/}
          {/*          <li><a href="#">SALE New Added </a></li>*/}
          {/*          /!*<li><Link to={'#'}>SALE Selling fast</Link></li>*!/*/}
          {/*          <li><a href="#">SALE Dresses</a></li>*/}
          {/*          <li><Link to={"#"}>SALE Top</Link></li>*/}
          {/*          <li><Link to={'#'}>SALE Shoes</Link></li>*/}
          {/*        </ul>*/}
          {/*      </div>*/}

          {/*      <div className={styles.row2}>*/}
          {/*        <header>Trending</header>*/}
          {/*        <div className={styles.lPImage}>*/}
          {/*          <img*/}
          {/*              src="/images/product/ao1.jpg"*/}
          {/*              alt=""*/}
          {/*          />*/}
          {/*          <img*/}
          {/*              src="/images/product/ao2.jpg"*/}
          {/*              alt=""*/}
          {/*          />*/}
          {/*          <img*/}
          {/*              src="/images/product/ao3.jpg"*/}
          {/*              alt=""*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </Box>*/}
          {/*  </Box>*/}
          {/*</li>*/}
          {/*/women*/}
          <li>
            <Flex
              transform={"skew(-10deg)"}
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              bgColor={`${tag && tag === "women" ? "#d01345" : ""}`}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/products?category=Quần Dài Nữ">
                <Text
                  transform={"skew(10deg)"}
                  _hover={{ transform: "skew(0deg)" }}
                >
                  Nữ
                </Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY PRODUCTS</b>
                  </header>

                  <ul className={styles.megaLinks}>
                    {category.map((cat) => (
                      <li key={cat.id}>
                        <Link to={"/product/women"}>{cat.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.row}>
                  <header>
                    <b>SHOP BESTSELLERS</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY EDIT</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/*men*/}
          <li>
            <Flex
              transform={"skew(-10deg)"}
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              bgColor={`${tag && tag === "men" ? "#d01345" : ""}`}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/products?category=Áo Thun Nam">
                <Text
                  transform={"skew(10deg)"}
                  _hover={{ transform: "skew(0deg)" }}
                >
                  Nam
                </Text>
              </Link>
            </Flex>

            <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header>
                    <b>Theo danh mục</b>
                  </header>
                  <ul className={styles.megaLinks}>
                    {category2.map((cat) => (
                      <li key={cat.id}>
                        <Link to={"/product/men"}>{cat.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.row2}>
                  <header>Trending</header>
                  <div className={styles.lPImage}>
                    {p?.slice(0, 3)?.map((sampleImage) => (
                      <div key={sampleImage.id} className={styles.lPImage}>
                        <img
                          key={sampleImage.id}
                          src={sampleImage?.image?.url}
                          alt={sampleImage.title}
                        />
                        <p></p>
                      </div>
                    ))}
                  </div>
                </div>
              </Box>
            </Box>
          </li>
          {/*unisex*/}
          <li>
            <Flex
              transform={"skew(-10deg)"}
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              bgColor={`${tag && tag === "unisex" ? "#d01345" : ""}`}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="?tag=unisex">
                <Text>Unisex</Text>
              </Link>
            </Flex>

            <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY PRODUCTS</b>
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">SALE View all</a>
                    </li>
                    <li>
                      <a href="#">SALE New Added </a>
                    </li>
                    {/*<li><Link to={'#'}>SALE Selling fast</Link></li>*/}
                    <li>
                      <a href="#">SALE Dresses</a>
                    </li>
                    <li>
                      <Link to={"#"}>SALE Top</Link>
                    </li>
                    <li>
                      <Link to={"#"}>SALE Shoes</Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.row2}>
                  <header>Trending</header>
                  <div className={styles.lPImage}>
                    <img src="/images/product/ao1.jpg" alt="" />
                    <img src="/images/product/ao2.jpg" alt="" />
                    <img src="/images/product/ao3.jpg" alt="" />
                  </div>
                </div>
              </Box>
            </Box>
          </li>
          {/*kids*/}
          <li>
            <Flex
              transform={"skew(-10deg)"}
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              bgColor={`${tag && tag === "kid" ? "#d01345" : ""}`}
              justifyContent={"center"}
              h="49px"
            >
              <Link
                className={styles.Link}
                to="/products??category=Áo Liền Quần"
              >
                <Text
                  className={"whitespace-nowrap"}
                  transform={"skew(10deg)"}
                  _hover={{ transform: "skew(0deg)" }}
                >
                  Trẻ em
                </Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY PRODUCTS</b>
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <Link to={"/"}>New in</Link>
                    </li>
                    <li>
                      <Link to={"/"}>T-Shirts</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Jeans</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Trousers</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <header>...</header>
                    <li>
                      <Link to={"/"}>Jacket</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Short</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Underwear</Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <header>
                    <b>SHOP BESTSELLERS</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao2.jpg" alt="" />
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY EDIT</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                    <div>
                      <img src="/images/product/ao1.jpg" alt="" />
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Box>
      <Search />
    </Box>
  );
};

export default SubNav;
