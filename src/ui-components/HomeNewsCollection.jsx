/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import HomeNews from "./HomeNews";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function HomeNewsCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "HomeNewsCollection")}
    >
      {(item, index) => (
        <HomeNews
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HomeNews>
      )}
    </Collection>
  );
}
