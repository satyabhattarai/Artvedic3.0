"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import React from "react";

const MasonryLayout = ({ children }) => {
  return (
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Masonry>{children}</Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryLayout;
