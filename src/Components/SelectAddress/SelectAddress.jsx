import React from "react";

import Divider from '@mui/material/Divider';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { useNavigate } from "react-router-dom";

import "./selectAddress.scss";
import { useState } from "react";

export default function SelectAddress() {
const navigate = useNavigate()

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [adressStart, setAdressStart] = useState("ha-noi");

  const handleAddressStart = (event) => {
    setAdressStart(event.target.value);
  };
  const [adressEnd, setAdressEnd] = useState("ha-giang");

  const handleAddressEnd = (event) => {
    setAdressEnd(event.target.value);
  };

  const [valueDate, setValueDate] = useState(dayjs(new Date()));

  const handleChangeDate = (newValue) => {
    setValueDate(newValue);
  };

  const onClickSearch = () => {
    const pathName = ('ve-xe-di-tu-' + adressStart + '-den-' + adressEnd).toString()
    navigate(`/search/${pathName}`)
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
            centered
            className="tabs"
          >
            <Tab value="1" label="Xe khách" />
            <Tab value="2" label="Máy bay" />
            <Tab value="3" label="Thuê xe" />
          </Tabs>
        </Box>
        <Divider sx={{ margin: '8px 0px' }} />
        <Box sx={{ width: "100%", display: "flex", alignItems: 'center' }}>
          <Card variant="" sx={{ width: "calc(100% - 250px)" }}>
            <CardContent className="select_address_date">
              <FormControl className="select_address_start">
                <InputLabel id="demo-simple-select-label">Nơi xuất phát</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={adressStart}
                  label="Nơi xuất phát"
                  onChange={handleAddressStart}
                >
                  <MenuItem value='ha-noi'>Hà Nội</MenuItem>
                  <MenuItem value='da-nang'>Đà Nẵng</MenuItem>
                  <MenuItem value='hue'>Huế</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="select_address_end">
                <InputLabel id="demo-simple-select-label">Nơi đến</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={adressEnd}
                  label="Nơi đến"
                  onChange={handleAddressEnd}
                >
                  <MenuItem value='ha-giang'>Hà Giang</MenuItem>
                  <MenuItem value='nam-dinh'>Nam Định</MenuItem>
                  <MenuItem value='bac-ninh'>Bắc Ninh</MenuItem>
                </Select>
              </FormControl> 
              <LocalizationProvider className="select_date" dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Ngày đi"
                    inputFormat="MM/DD/YYYY"
                    value={valueDate}
                    onChange={handleChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </CardContent>
          </Card>
          <CardActions sx={{ width: 250, height: 66, padding: "0px 8px" }}>
            <Button sx={{ width: "100%", height: "100%" }} variant="contained" onClick={() => onClickSearch()}>
              Tìm chuyến
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
