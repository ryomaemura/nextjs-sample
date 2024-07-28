"use client";

import React, { useState } from "react";

import { useCount } from "../context/CountContext";

import {
  Box,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";

const Home: React.FC = () => {
  const { count, setCount } = useCount();

  const dummySelectItem = [
    "サンプル1",
    "サンプル2",
    "サンプル3",
    "サンプル4",
    "サンプル5",
    "サンプル6",
    "サンプル7",
    "サンプル8",
  ];

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const submitItem = () => {
    console.log(personName);
  };

  return (
    <div>
      <div>複数選択サンプル</div>
      <Box key={0}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            // MenuProps={MenuProps}
          >
            {dummySelectItem.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box key={1}>
        <Button onClick={() => submitItem()}>クリックボタン</Button>
      </Box>

      <h1>Count: {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </div>
  );
};

export default Home;
