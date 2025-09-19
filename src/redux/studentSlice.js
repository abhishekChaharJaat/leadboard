import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeaderboard = createAsyncThunk(
  "students/fetchLeaderboard",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.quizrr.in/api/hiring/leaderboard?page=1&limit=100"
      );
      return response.data.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  leaderboard: [],
  status: "idle",
  error: null,
  theme: localStorage.getItem("theme") || "light",
  user: null,
  isScrolling: false,
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    clearLeaderboard: (state) => {
      state.leaderboard = [];
      state.status = "idle";
      state.error = null;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsScrolling: (state, action) => {
      state.isScrolling = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeaderboard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leaderboard = action.payload;
      })
      .addCase(fetchLeaderboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearLeaderboard, toggleTheme, setTheme, setUser, setIsScrolling } =
  studentSlice.actions;
export default studentSlice.reducer;
