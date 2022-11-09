import React, { useState } from 'react';
import Block from './Block';
import classes from './Road.module.scss';
import { getRandomNum } from './libs';

interface IRoad {
  columns: number;
  cellSize: number;
  amountToMove: number;
}

const pattern = [
  {
    columns: 2,
    rows: 2,
    id: 1,
  },
  {
    columns: 2,
    rows: 1,
    id: 2,
  },
  {
    columns: 1,
    rows: 2,
    id: 3,
  },
  {
    columns: 1,
    rows: 1,
    id: 4,
  },
  {
    columns: 2,
    rows: 1,
    id: 5,
  },
  {
    columns: 2,
    rows: 1,
    id: 6,
  },
  {
    columns: 2,
    rows: 2,
    id: 7,
  },
  {
    columns: 1,
    rows: 2,
    id: 8,
  },
  {
    columns: 2,
    rows: 1,
    id: 9,
  },
  {
    columns: 3,
    rows: 1,
    id: 10,
  },
];

let patternKey = 1;
let roadHeight:number;
let roadHeightDefaultIsSet = false
let roadPaddingBottom = 0;
let alreadyBuiltAmount = 0;

export default function Road({ columns, cellSize}: IRoad) {
  const roadWidth = cellSize * columns;
  const randomFirstBackground = Math.round(getRandomNum(120, 170));
  const randomFirstOpacity = Math.round(getRandomNum(2, 9)) / 10;
  if (!roadHeightDefaultIsSet) {
    roadHeight = cellSize * 13.75
    roadHeightDefaultIsSet = true
  }
  
  const [blocksSpecs, setBlocksSpecs] = useState([
    {
      columns: 2,
      rows: 2,
      id: Date.now() * Math.random(),
      backgroundColor: `rgba(${randomFirstBackground},${randomFirstBackground},${randomFirstBackground},${randomFirstOpacity})`,
      borderRadius: `${Math.round(cellSize / 100 * 12.5)}px`
    },
  ]);

  function initRoad() {
    const currentPattern = pattern[patternKey];
    const columnAmount = currentPattern.columns;
    const rowAmount = currentPattern.rows;
    const randomBackground = Math.round(getRandomNum(120, 170));
    const randomOpacity = Math.round(getRandomNum(2, 9)) / 10;

    let resultArr = [
      ...blocksSpecs,
      {
        columns: columnAmount,
        rows: rowAmount,
        id: Date.now() * Math.random(),
        backgroundColor: `rgba(${randomBackground},${randomBackground},${randomBackground},${randomOpacity})`,
        borderRadius: `${Math.round(cellSize / 100 * 12.5)}px`
      },
    ];
    const amountToRefresh = 100;
    const amountAfterRefresh = 60;
    const amountToMove = 20
    setTimeout(() => {
      if (patternKey < pattern.length - 1) {
        patternKey += 1;
      } else {
        patternKey = 0;
      }

      alreadyBuiltAmount += 1;

      if (resultArr.length === amountToRefresh) {
        resultArr = resultArr.slice(
          resultArr.length - amountAfterRefresh,
          resultArr.length
        );
        alreadyBuiltAmount = amountAfterRefresh;
          // console.log('slice completed');
          
        roadPaddingBottom += (amountToRefresh / 10) * 3 * cellSize;
      }

      if (alreadyBuiltAmount > amountToMove) {
        roadHeight += cellSize / 1.66666;
      }
      // console.log(resultArr.length,'resultArrLength');
      // console.log(alreadyBuiltAmount,'already built');
      
      setBlocksSpecs(resultArr);
    }, 200);

    return blocksSpecs.map((item) => {
      return (
        <Block
          columns={item.columns}
          rows={item.rows}
          backgroundColor={item.backgroundColor}
          borderRadius={item.borderRadius}
          key={item.id}
          id={item.id}
        ></Block>
      );
    });
  }

  return (
    <div
      className={classes.road}
      id="road"
      style={{
        width: `${roadWidth}px`,
        height: `${roadHeight}px`,
        gridTemplateColumns: `repeat(${columns},${cellSize}px)`,
        gridAutoRows: `${cellSize}px`,
        paddingTop: `${roadPaddingBottom / 2.5}px`,
      }}
    >
      {initRoad()}
    </div>
  );
}
