import React from "react";
import { StaticQuery, graphql } from "gatsby";

const _ = require("lodash");

const MainSiteGlobalMenu = ({ data }) => {
  return (
    <div className="o-layout__module c-utility-nav">
      <div className="o-menu o-menu--flex">
        <div className="menu-header-utility-container">
          <ul
            id="menu-header-utility"
            role="menu"
            className="o-menu__list"
            aria-expanded="false"
          >
            {data.allHeaderUtility.edges.map(link => {
              const node = link.node;
              return (
                <li className="o-menu__item" key={node.id}>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query mainSiteGlobalMenu {
        allHeaderUtility {
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
    render={data => <MainSiteGlobalMenu data={data} {...props} />}
  />
);
