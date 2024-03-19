"use client";
import React, { useState, useEffect } from "react";
import ReactCurvedText from "react-curved-text";

const CurvedText = ({text}: {text: string}) => {
   return (
    <ReactCurvedText
      width={180}
      height={180}
      cx={90}
      cy={90}
      rx={70}
      ry={70}
      startOffset={0}
      text={text}
    />
  );
};

export default CurvedText;
