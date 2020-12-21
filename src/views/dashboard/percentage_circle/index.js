import { Typography } from '@material-ui/core';

import PercentageCircle from '@/components/PercentageCircle';

const PercentageCirclePage = () => {
  return (
    <>
      <Typography variant="h3">Percentage Circle</Typography>
      <PercentageCircle percent={30} />
    </>
  );
};

export default PercentageCirclePage;
