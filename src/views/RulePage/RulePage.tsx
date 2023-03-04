import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

import demodata from 'assets/demo/demodata.json';

import { RuleType } from 'typings';

const RulePage: FC = () => {

  const [detail, setDetail] = useState<RuleType>()

  const { ruleId } = useParams()

  console.log(ruleId)

  useEffect(() => {
    setDetail(demodata.find((cell) => cell.ruleId === ruleId))
  }, [ruleId])

  return (
    <Box py={5}>
      <Box width='fit-content' mx='auto'>
        <Typography variant='body1'>
          {`Rule ID: ${detail?.ruleId}`}
        </Typography>
        <Typography variant='body1'>
          {`Title: ${detail?.title}`}
        </Typography>
        <Typography variant='body1'>
          {`Type: ${detail?.type}`}
        </Typography>
        <Typography variant='body1'>
          {`Used By: ${JSON.stringify(detail?.usedBy)}`}
        </Typography>
      </Box>     
    </Box>
  );
}

export default RulePage;
