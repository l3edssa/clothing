import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../Components/collections-overview/CollectionOverview";
import Collection from "../collection/Collection";
import "./Shop.scss";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
