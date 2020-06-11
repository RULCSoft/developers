import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const ProductsNetworking = ({ data }) => {
  return (
    <Col name="products-networking" header="Networking">
      {data.allProductsNetworking.edges.map((link, i) => {
        const node = link.node;
        return (
          <li className="o-menu__item" key={i}>
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className="o-menu__link"
              role="menuitem"
            >
              <span className="o-menu__title">
                {node.title}
              </span>
            </a>
          </li>
        );
      })}
    </Col>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query productsNetworking {
        allProductsNetworking {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => <ProductsNetworking data={data} {...props} />}
  />
);
