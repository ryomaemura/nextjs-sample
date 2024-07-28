"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

type SnackbarSeverity = "info" | "success" | "warning" | "error";

export default function Home() {
  const [open, setOpen] = useState<boolean>();
  const [severity, setSeverity] = useState<SnackbarSeverity>("info");
  const [message, setMessage] = useState<string>("");

  const router = useRouter();

  const movePage = () => {
    router.push("/selectButton");
  };

  //showSnackbarの実体。各stateをセットし、snackbarを表示する
  const showSnackbar = (type: SnackbarSeverity, message: string): void => {
    setOpen(true);
    setSeverity(type);
    setMessage(message);
  };

  //snackbarのxボタンが押された時のコールバック関数
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div>サンプルタイトル</div>
      <Button onClick={() => movePage()}>セレクトボタンページに移動</Button>
      <Button
        variant="outlined"
        onClick={() => showSnackbar("success", "成功しました。")}
      >
        成功スナックバー
      </Button>
      <Button
        variant="outlined"
        onClick={() => showSnackbar("error", "失敗しました。")}
      >
        エラースナックバー
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
