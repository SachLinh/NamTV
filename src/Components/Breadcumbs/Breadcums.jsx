import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import {useNavigate} from 'react-router-dom'


export default function CustomSeparator(props) {
    const navigate = useNavigate()
    const handleClick = (event) => {
      event.preventDefault();
      navigate(`/`)
    }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Vé xe khách
    </Link>,
    <Typography key="3" color="text.primary">
      {props.nameSearch}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}