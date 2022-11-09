import React from 'react';
import classes from './Block.module.scss';

interface IBlock {
  columns: number;
  rows: number;
  id: number;
  backgroundColor: string;
  borderRadius: string;
}

export default function Block(props: IBlock) {
  return (
    <div
      className={classes.block + ' ' + classes.active}
      style={{
        gridColumn: props.columns + ' span',
        gridRow: props.rows + ' span',
        background: props.backgroundColor,
        borderRadius: props.borderRadius
      }}
    >
      <div className={classes.left}></div>
      <div className={classes.front}></div>
      <div className={classes.right}></div>
    </div>
  );
}
