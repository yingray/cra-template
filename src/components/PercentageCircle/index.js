import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import clsx from 'clsx';

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    width: ({ size, fullWidth }) => (fullWidth ? '100%' : size),
    height: ({ size }) => size,
  },
  outer: {
    fill: 'none',
    strokeLinecap: 'square',
    strokeWidth: ({ strokeWidth }) => strokeWidth,
    strokeDasharray: ({ strokeDasharray }) => strokeDasharray,
    transition: ({ duration }) => `${duration}ms`,
  },
  inner: {
    fill: 'none',
    stroke: ({ circleInnerColor }) => circleInnerColor,
    strokeWidth: ({ strokeWidth }) => strokeWidth,
  },
});

const getStrokeDasharray = (radius, percent) => {
  const fakePercent = percent === 98 || percent === 99 ? 97 : percent;
  const circumference = 2 * Math.PI * radius;
  const pCircumference = (circumference * fakePercent) / 100;
  return [pCircumference, circumference];
};

const PercentageCircle = (props) => {
  const {
    className = '',
    percent = 0,
    duration = 1000,
    delay = 0,
    size = 150,
    circleColor = 'rgb(9, 211, 172)',
    circleInnerColor = '#E4F0F5',
    strokeWidth = 8,
  } = props;

  const diameter = size - strokeWidth;
  const radius = diameter / 2;
  const x = size / 2;
  const y = (size - diameter) / 2;
  const d = `
      M ${x} ${y}
      a ${radius} ${radius} 0 0 1 0 ${diameter}
      a ${radius} ${radius} 0 0 1 0 ${diameter * -1}
    `;

  const [strokeDasharray, setStrokeDasharray] = useState(getStrokeDasharray(radius, 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setStrokeDasharray(getStrokeDasharray(radius, percent));
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, radius, percent]);

  const classes = useStyles({
    circleInnerColor,
    duration,
    percent,
    size,
    strokeWidth,
    strokeDasharray,
  });

  return (
    <svg className={clsx(className, classes.root)} viewBox={`0 0 ${size} ${size}`} stroke={circleColor}>
      <path className={classes.inner} d={d} />
      <path className={classes.outer} d={d} />
    </svg>
  );
};

export default PercentageCircle;
